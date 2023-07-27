import { BadRequestError, InternalServerError } from "../../errors/CustomAPIError.js";
import User from "../../models/users/UserModel.js";
import { StatusCodes } from 'http-status-codes';
import { validatePassword } from "../../utils/utils.js";
import Trip from "../../models/admin/TripModel.js";
import Bookings from "../../models/users/BookingModel.js";

export const register = async (req, res) => {
  const { email, fullName, password, phone } = req.body;

  if(!email || !fullName || !password || !phone){ throw new BadRequestError('Fill all fields')};
  
  validatePassword(password);

  const phoneNumberAlreadyExists = await User.phoneNumberAlreadyExists(phone);

  const emailAlreadyExists = await User.emailAlreadyExists(email);
    
  if(!phoneNumberAlreadyExists && !emailAlreadyExists){
    const newUser = await User.create({ email, phone, password, fullName });
    const token = await newUser.generateJWT();
    // if(newUser){ return res.status(StatusCodes.CREATED).json(newUser, token)}
    if(newUser){ 
      return res.status(StatusCodes.CREATED).json({ 
        email: newUser?.email, 
        fullName: newUser?.fullName, 
        phone: newUser?.phone,
        userId: newUser._id,
        token 
    })}
  }
  // throw new InternalServerError('Something went wrong!');
}

export const login = async (req, res) => {
  const { email, password } = req.body;

  if(!email || !password){
    throw new BadRequestError("Please provide email and password");
  }

  const foundUser = await User.findUser(email);
  const hasCorrectPassword = foundUser.comparePassword(password);

  if(!hasCorrectPassword){ 
    throw new BadRequestError('You have entered an incorrect password.');
  }

  const token = foundUser.generateJWT();
  return res.status(StatusCodes.CREATED).json({
    email: foundUser.email, 
    fullName: foundUser.fullName, 
    phone: foundUser.phone,
    token,
    userId: foundUser._id
  });
}

export async function bookTicket (req, res, next){
  const verificationResponse = res.verificationResponse;
  const { data } = verificationResponse;
  const { metadata } = data;
  const { seatNumber, ticketId, nextOfKinName, nextOfKinPhoneNumber, amount, userId } = metadata;
  if(!seatNumber || !ticketId || !nextOfKinName || !nextOfKinPhoneNumber || !amount || !userId){
    throw new BadRequestError("An error occurred, required values are not supplied");
  }

  let updatedBookedSeats = [];
  let updatedAvailableSeats = [];


  const foundTicket = await Trip.findOne({ _id:ticketId });

  if(!foundTicket){
    return res.status(404).json({message: 'Ticket not found'});
  }
  
  const bookedSeats = foundTicket.bookedSeats;
  const isBookedSeat = bookedSeats.includes(seatNumber);

  if(isBookedSeat){
    throw new BadRequestError('Seat not available for booking, please book another seat');
  }

  const availableSeats = foundTicket?.availableSeats;
  const isAvailableSeat = availableSeats?.includes(seatNumber) ?? false;

  if(isAvailableSeat){
    updatedAvailableSeats = availableSeats.filter(num => num !== seatNumber);
    updatedBookedSeats.push(...bookedSeats, seatNumber);

    const filter = { availableSeats: updatedAvailableSeats, bookedSeats: updatedBookedSeats };

    const updatedBooking = await Trip.findOneAndUpdate({_id:ticketId}, filter, { new: true });

    if(updatedBooking){
      const bookingInfo = { ticketId, metadata, userId }
      res.bookingInfo = bookingInfo;
      return next();
    } 
    throw new InternalServerError('An error occurred while booking seat')
  } 

  if(!isBookedSeat && !isAvailableSeat){
    throw new BadRequestError('The seat number is not valid');
  }
}

export async function updateBookingsList (req, res){
  // booking data is gotten from bookTicket
  const { bookingInfo: { ticketId, userId, metadata } } = res;

  const foundExistingBooking = await Bookings.findOne({ticketId});

  if(foundExistingBooking){
    const existingPassengers = foundExistingBooking?.passengers;
    const updatedPassengers = [...existingPassengers, {metadata, userId}];
    const updatedExistingBooking = await Bookings.findOneAndUpdate({ticketId}, { passengers: updatedPassengers }, { new: true });
    
    if(updatedExistingBooking){
      // return res.status(200).json({ message: 'Ticket booked successfully' });
      // return res.status(200).json(updatedExistingBooking);
      updatedExistingBooking.message = 'Ticket booked successfully';
      return res.status(200).json(updatedExistingBooking);

    }
    throw new InternalServerError('An error occurred, please try again');
  }
  
  const newBooking = await Bookings.create({ ticketId, passengers: [{userId, metadata}] });
  if(!newBooking){ throw new BadRequestError('Bad Request')}
  newBooking.message = 'Ticket booked successfully';
  return res.status(200).json(newBooking);
    // return res.status(200).json({ message: 'Ticket booked successfully'});
}

export const getAllTicketsWithAvailableSeats  = async (req, res) => {
  // Return all tickets having no empty seat
  const seatsWithAvailableSeats  = await Trip.find({availableSeats: { $ne: [] }});
  if(seatsWithAvailableSeats ){
    return res.status(StatusCodes.OK).json(seatsWithAvailableSeats );
  }
  throw new InternalServerError('An error occurred, please try again');
}