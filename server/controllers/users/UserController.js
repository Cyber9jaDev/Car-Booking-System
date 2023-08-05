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

export const getAllTicketsWithAvailableSeats  = async (req, res) => {
  // Return all tickets having no empty seat
  const seatsWithAvailableSeats  = await Trip.find({availableSeats: { $ne: [] }});
  if(seatsWithAvailableSeats ){
    return res.status(StatusCodes.OK).json(seatsWithAvailableSeats );
  }
  throw new InternalServerError('An error occurred, please try again');
}