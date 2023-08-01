import axios from "axios";
import { BadRequestError, InternalServerError, UnAuthorizedError } from "../../errors/CustomAPIError.js";
import Trip from "../../models/admin/TripModel.js";
import Bookings from "../../models/users/BookingModel.js";

export const initializeTransaction = async(req, res, next) => {
  const { email, metadata } = req.body;
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

export async function bookTicket (req, res, next){
  const { metadata, reference } = res;
  console.log(reference)
  const { seatNumber, ticketId, nextOfKinName, nextOfKinPhoneNumber, amount, userId } = metadata;

  if(!seatNumber || !ticketId || !nextOfKinName || !nextOfKinPhoneNumber || !amount || !userId || !reference){
    throw new BadRequestError("An error occurred, required values are not supplied");
  }

  const foundTicket = await Trip.findOne({ _id:ticketId });
  
  if(!foundTicket){
    return res.status(404).json({message: 'Ticket not found'});
  }
  
  const findBookingWithReference = await Bookings.findOne({ ticketId });
  if(findBookingWithReference){
    const passengers = findBookingWithReference?.passengers;
    const foundUserBooking = passengers.find(passenger => passenger.reference === reference)
    if(foundUserBooking){
      return res.status(200).json(foundUserBooking);
    }
  }

  let updatedBookedSeats = [];
  let updatedAvailableSeats = [];
  
  const bookedSeats = foundTicket?.bookedSeats;
  const isBookedSeat = bookedSeats?.includes(seatNumber) ?? false;

  // if(isBookedSeat){
  //   throw new BadRequestError('Seat not available for booking, please book another seat');
  // }

  const availableSeats = foundTicket?.availableSeats;
  const isAvailableSeat = availableSeats?.includes(seatNumber) ?? false;
  // console.log(isAvailableSeat);
  // console.log(isBookedSeat);

  if(isAvailableSeat && !isBookedSeat){

    updatedAvailableSeats = availableSeats.filter(num => num !== seatNumber);
    updatedBookedSeats.push(...bookedSeats, seatNumber);

    const filter = { availableSeats: updatedAvailableSeats, bookedSeats: updatedBookedSeats };
    const updatedBooking = await Trip.findOneAndUpdate({_id:ticketId}, filter, { new: true });

    if(updatedBooking){
      const bookingInfo = { ticketId, metadata, userId, reference }
      res.bookingInfo = bookingInfo;
      return next();
    } 
    throw new InternalServerError('An error occurred while booking seat')
  } 

  if(!isBookedSeat && !isAvailableSeat){
    throw new BadRequestError('The seat number is not valid');
  }

  // console.log(foundTicket);

}

export async function updateBookingsList (req, res){
  // booking data is gotten from bookTicket
  const { bookingInfo: { ticketId, userId, metadata, reference } } = res;
  const { bookingInfo } = res;
  console.log(bookingInfo);
  console.log(reference)

  // console.log(bookingInfo)
  const foundExistingBooking = await Bookings.findOne({ticketId});

  if(foundExistingBooking){
    const existingPassengers = foundExistingBooking?.passengers;
    const updatedPassengers = [...existingPassengers, { metadata, userId, reference }];
    const updatedExistingBooking = await Bookings.findOneAndUpdate({ticketId}, { passengers: updatedPassengers }, { new: true });
    
    if(updatedExistingBooking){
      return res.status(200).json({reference, ticketId, userId, metadata, status: true, message: 'Booking created successfully'});
    }
    throw new InternalServerError('An error occurred, please try again');
  }
  
  const newBooking = await Bookings.create({ reference, ticketId, passengers: [{ userId, metadata }] });
  if(newBooking){ 
    return res.status(200).json({ticketId, userId, metadata, status: true, message: 'Booking created successfully'});
  }
  throw new InternalServerError('An error occurred, please try again');
}














export const testing = (req, res) => {
  const { metadata, reference } = res;
  console.log(metadata);
  console.log(reference);

  return res.status(200).json({m: 'dsds'});
}
