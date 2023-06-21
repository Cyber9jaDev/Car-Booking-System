import { BadRequestError, InternalServerError, UnAuthorizedError } from "../../errors/CustomAPIError.js";
import User from "../../models/users/UserModel.js";
import { StatusCodes } from 'http-status-codes';

export const register = async (req, res) => {
  const { email, username, password } = req.body;

  if(!email || !username || !password){ throw new BadRequestError('Fill in all fields')};

  const existingUsername = await User.hasExistingUsername(username);
  const existingEmail = await User.hasExistingEmail(email);
  
  if(!existingUsername && !existingEmail){
    const newUser = await User.create({ email, username, password });
    if(newUser){ return res.status(StatusCodes.CREATED).json(newUser) }
  }
  throw new InternalServerError('Something went wrong!');
}

export const login = async (req, res) => {
  const { email, password } = req.body;

  const foundUser = await User.findUser(email);

  if(!foundUser.isCorrectPassword(password)){ throw new BadRequestError('You have entered an incorrect password.')}

  if(foundUser && foundUser.isCorrectPassword(password)){
    return res.status(StatusCodes.OK).json(foundUser);
  }

}