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

// Return all tickets having no empty seat
export const getAllTicketsWithAvailableSeats  = async (req, res) => {
  const { travellingFrom, travellingTo, departureDate, page, pageSize } = req.query;
  const queries = {  }
  if(travellingFrom !== 'none' && travellingFrom !== travellingTo){ queries.travellingFrom = travellingFrom }
  if(travellingTo !== 'none' && travellingFrom !== travellingTo){ queries.travellingTo = travellingTo }
  if(departureDate !== 'none') { queries.departureDate = departureDate}

  const seatsWithAvailableSeats  = await Trip.find({ ...queries, availableSeats: { $ne: [] } })
    .limit(pageSize).skip((page - 1) * pageSize);

  const totalPages = await Trip.find({ ...queries, availableSeats: { $ne: [] } }).countDocuments();

  if(seatsWithAvailableSeats ){
    return res.status(StatusCodes.OK).json({
      tickets:seatsWithAvailableSeats,
      totalPages: Math.ceil( totalPages / pageSize),
      currentPage: parseInt(page),
    });
  }
  throw new InternalServerError('An error occurred, please try again');
}