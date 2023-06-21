import { BadRequestError, InternalServerError } from "../../errors/CustomAPIError.js";
import User from "../../models/users/UserModel.js";
import { StatusCodes } from 'http-status-codes';

export const register = async (req, res) => {
  const { email, username, password } = req.body;
  const user = await User.create({ email, username, password });

  if(user){
    return res.status(StatusCodes.CREATED).json(user)
  }
  throw new InternalServerError('Something went wrong!')
}

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findUserByEmail(email);
  if(!user){ return res.status(StatusCodes.NOT_FOUND).json({message: 'Email address not found'}) }
  if(!user.isCorrectPassword(password)){ throw new BadRequestError('Password is incorrect') }
  
  return res.status(StatusCodes.OK).json(user);

}