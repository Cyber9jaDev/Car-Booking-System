import { BadRequestError, InternalServerError } from "../../errors/CustomAPIError.js";
import User from "../../models/users/UserModel.js";
import { StatusCodes } from 'http-status-codes';
import { validatePassword } from "../../utils/utils.js";
import Trip from "../../models/admin/TripModel.js";

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
    token
  });
}

export const bookTicket = async (req, res) => {
  const { seatNo, _id } = req.body;
  let updatedBookedSeats = [];
  let updatedAvailableSeats = [];

  const foundTicket = await Trip.findOne({ _id });

  if(!foundTicket){
    return res.status(404).json({message: 'Ticket not found'})
  }
  else{
    const bookedSeats = foundTicket.bookedSeats;
    const isBookedSeat = bookedSeats.includes(seatNo);
  
    if(isBookedSeat){
      throw new BadRequestError('Seat has been booked');
    }
  
    const availableSeats = foundTicket?.availableSeats;
    const isAvailableSeat = availableSeats.includes(seatNo);

    // Ensure the right no is passed in for seat number
    if(!isBookedSeat && !isAvailableSeat){
      throw new BadRequestError('The seat no is invalid');
    }
  
    else if(isAvailableSeat){
      updatedAvailableSeats = availableSeats.filter(num => num !== seatNo);
      updatedBookedSeats.push(...bookedSeats, seatNo);
  
      const filter = { availableSeats: updatedAvailableSeats, bookedSeats: updatedBookedSeats };
  
      const updatedBooking = await Trip.findOneAndUpdate({_id}, filter, { new: true });
      
      if(updatedBooking){
        return res.status(200).json(updatedBooking)
      }
      
      throw new InternalServerError('An error occurred while booking seat')
    } 
  }

  
}

export const getAllTrips = async (req, res) => {
  const foundAllTrips = await Trip.find({});
  if(!foundAllTrips){
    throw new InternalServerError('An error occurred, please try again');
  }
  return res.status(StatusCodes.OK).json(foundAllTrips);
}