import { BadRequestError, InternalServerError } from "../../errors/CustomAPIError.js";
import User from "../../models/users/UserModel.js";
import { StatusCodes } from 'http-status-codes';
import { validatePassword } from "../../utils/utils.js";
import Trip from "../../models/admin/TripModel.js";
import Bookings from "../../models/users/BookingModel.js";

export const register = async (req, res) => {
  const { email, fullName, password, phone } = req.body;

  if(!email || !fullName || !password || !phone){ throw new BadRequestError('Fill in all fields')};
  
  validatePassword(password);

  const phoneNumberAlreadyExists = await User.phoneNumberAlreadyExists(phone);

  const emailAlreadyExists = await User.emailAlreadyExists(email);
    
  if(!phoneNumberAlreadyExists && !emailAlreadyExists){
    const newUser = await User.create({ email, phone, password, fullName });
    const token = await newUser.generateJWT();
    // if(newUser){ return res.status(StatusCodes.CREATED).json(newUser, token)}
    if(newUser){ return res.status(StatusCodes.CREATED).json({ 
      email: newUser?.email, 
      fullName: newUser?.fullName, 
      phone: newUser?.phone,
      userId: foundUser._id,
      token 
    })}
  }
  throw new InternalServerError('Something went wrong!');
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
  const { seatNo, ticketId, metadata, userId } = req.body;

  if(!seatNo || !ticketId || !metadata?.nextOfKinName || !metadata?.nextOfKinPhone || !userId){
    throw new BadRequestError("Please provide all values");
  }

  let updatedBookedSeats = [];
  let updatedAvailableSeats = [];

  const foundTicket = await Trip.findOne({ _id:ticketId });

  if(!foundTicket){
    return res.status(404).json({message: 'Ticket not found'})
  }
  
  const bookedSeats = foundTicket.bookedSeats;
  const isBookedSeat = bookedSeats.includes(seatNo);

  if(isBookedSeat){
    throw new BadRequestError('Seat has been booked');
  }

  const availableSeats = foundTicket?.availableSeats;
  const isAvailableSeat = availableSeats.includes(seatNo);

  if(isAvailableSeat){
    updatedAvailableSeats = availableSeats.filter(num => num !== seatNo);
    updatedBookedSeats.push(...bookedSeats, seatNo);

    const filter = { availableSeats: updatedAvailableSeats, bookedSeats: updatedBookedSeats };

    const updatedBooking = await Trip.findOneAndUpdate({_id:ticketId}, filter, { new: true });
    
    if(updatedBooking){
      const booking = { seatNo, ticketId, metadata, userId }
      res.booking = booking
      return next();
    } 
    throw new InternalServerError('An error occurred while booking seat')
  } 

  if(!isBookedSeat && !isAvailableSeat){
    throw new BadRequestError('The seat no is invalid');
  }
}

export async function updateBookingsList (req, res){
  // booking data is gotten from bookTicket
  const { booking: { ticketId, userId, seatNo, metadata } } = res;

  const hasExistingBookings = await Bookings.find({ticketId});
  
  console.log(hasExistingBookings)

  if(hasExistingBookings){
    return res.status(200).json(hasExistingBookings)
  }
  
  // const newBooking = await Bookings.create({ ticketId, passengers:  [ {seatNo, userId, metadata} ] })
  // if(!newBooking){ throw new BadRequestError('Bad Request')}

  // return res.status(200).json(newBooking)


}

export const getAllSeatsWithAvailableSeats  = async (req, res) => {
  // Return all tickets having no empty seat
  const seatsWithAvailableSeats  = await Trip.find({availableSeats: { $ne: [] }});
  if(seatsWithAvailableSeats ){
    return res.status(StatusCodes.OK).json(seatsWithAvailableSeats );
  }
  throw new InternalServerError('An error occurred, please try again');
}