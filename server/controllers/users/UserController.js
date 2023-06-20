import User from "../../models/users/UserModel.js";
import { StatusCodes } from 'http-status-codes';

export const signup = async (req, res) => {
  const { email, username, password } = req.body;

  const user = await User.create({ email, username, password });
  if(user){
    return res.status(StatusCodes.CREATED).json(user)
  }
  return res.status(StatusCodes.BAD_REQUEST).json({message: 'Bad Request'});
}