import axios from "axios";
import { BadRequestError, InternalServerError, UnAuthorizedError } from "../../errors/CustomAPIError.js";
import Trip from "../../models/admin/TripModel.js";
import Bookings from "../../models/users/BookingModel.js";

export const initializeTransaction = async(req, res, next) => {
  const { email, metadata } = req.body;

  // Before initializing transaction, ensure the ticket is available for booking.

  const { data } = await axios.post('https://api.paystack.co/transaction/initialize',
    {
      amount: metadata?.amount * 100, 
      email, 
      callback_url: 'http://localhost:5173/paystack/verify', 
      "metadata": JSON.stringify(metadata)
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_KEY}`,
        'Content-Type': "application/json",
      }
    }
  );

  if(data?.status && data?.message === 'Authorization URL created'){
    return res.status(200).json(data);
  } 
  
  else if(!data.status){
    if(data.message === 'Request failed with status code 401'){
      throw new UnAuthorizedError('Not authorized.');
    }
    if(data.message === 'Request failed with status code 400'){
      throw new BadRequestError('Bad Request');
    }
    throw new InternalServerError(`${data.message}`);
  }
}

export const verifyTransaction = async (req, res, next) => {
  const { reference } = req.params;
  const { data }  = await axios.get(`https://api.paystack.co/transaction/verify/${reference}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_KEY}`,
      }
    }
  );

  if(data?.status && data?.data?.status === 'success'){
    res.metadata = data?.data?.metadata;
    res.reference = data?.data?.reference;
    next();
    // return res.status(200).json(data?.data);
  }
  
  else if(!data.status){
    if(data.message === 'Request failed with status code 401'){
      throw new UnAuthorizedError('Not authorized.');
    }
    if(data.message === 'Request failed with status code 400'){
      throw new BadRequestError('Bad Request');
    }
    throw new InternalServerError(`${data.message}`);
  }
}

export const bookTicket = async (req, res, next) => {
  const { metadata, reference } = res;
  const { seatNumber, ticketId, userId } = metadata;
  
  // Check bookings if a booking exist with the reference code
  const foundBookingByReference = await Bookings.findOne({ "passengers.reference": reference });
  if(foundBookingByReference){
    const passengers = foundBookingByReference.passengers;
    const foundPassengerBooking = passengers.find(passenger => passenger.reference === reference )
    if(foundPassengerBooking){
      const { reference, metadata } = foundPassengerBooking;
      return res.status(200).json({ reference, metadata, status: 'success' } );
    }
  }

  // Store booking details
  const foundTicket = await Trip.findOne({ _id:ticketId });

  // If ticket is not available for booking then throw an error
  if(!foundTicket){
    throw new InternalServerError('An error occurred');  //it should be 'not found' actually.
  }

  let updatedBookedSeats = [];
  let updatedAvailableSeats = [];
  
  const bookedSeats = foundTicket?.bookedSeats;
  const isBookedSeat = bookedSeats?.includes(seatNumber) ?? false;

  const availableSeats = foundTicket?.availableSeats;
  const isAvailableSeat = availableSeats?.includes(seatNumber) ?? false;

  if(isAvailableSeat && !isBookedSeat){
    updatedAvailableSeats = availableSeats.filter(num => num !== seatNumber);
    updatedBookedSeats.push(...bookedSeats, seatNumber);

    const filter = { availableSeats: updatedAvailableSeats, bookedSeats: updatedBookedSeats };
    const updatedBooking = await Trip.findOneAndUpdate({ _id:ticketId }, filter , { new: true });
    
    if(updatedBooking){
      const bookingInfo = { ticketId, metadata, userId, reference }
      res.bookingInfo = bookingInfo;
      return next();
    } 
    throw new InternalServerError('An error occurred while booking seat');
  } else if (isBookedSeat && !isAvailableSeat){
    throw new BadRequestError("Seat is not available for booking");
  } else{
    throw new BadRequestError('The seat number is not valid');
  }
}

export const updateBookingsList = async (req, res) => {
  const { bookingInfo } = res;
  const { ticketId, userId, metadata, reference } = bookingInfo;

  // Add the passenger to the list of passengers corresponding ta booking ticket
  const foundExistingBooking = await Bookings.findOne({ticketId});
  if(foundExistingBooking){
    const existingPassengers = foundExistingBooking?.passengers;
    const updatedPassengers = [...existingPassengers, { metadata, userId, reference }];
    const updatedExistingBooking = await Bookings.findOneAndUpdate({ ticketId }, { passengers: updatedPassengers }, { new: true });
    
    if(updatedExistingBooking){
      return res.status(200).json({ reference, metadata, status: 'success' });
    }
    throw new InternalServerError('An error occurred, please try again');
  }
  
  const newBooking = await Bookings.create({ ticketId, passengers: [{ reference, userId, metadata }] });
  if(newBooking){ 
    return res.status(200).json({ reference, metadata, status: 'success'} );
  }
  throw new InternalServerError('An error occurred, please try again');
}