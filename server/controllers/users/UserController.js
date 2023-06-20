import User from "../../models/users/UserModel.js";
import { StatusCodes } from 'http-status-codes';

export const register = async (req, res) => {
  const { email, username, password } = req.body;

  const user = await User.create({ email, username, password });

  if(user){
    return res.status(StatusCodes.CREATED).json(user)
  }
  return res.status(StatusCodes.BAD_REQUEST).json({message: 'Bad Request'});
}

export const login = async (req, res) => {
  const { email, password } = req.body;
  
  const user = await User.findOne({ email, password });

  if(user){
    return res.status(StatusCodes.OK).json(user);
  }

  return res.status(StatusCodes.BAD_REQUEST).json({message: 'Bad Request'})
}