import { BadRequestError, InternalServerError, UnAuthorizedError } from "../../errors/CustomAPIError.js";
import User from "../../models/users/UserModel.js";
import { StatusCodes } from 'http-status-codes';
import { validatePassword } from "../../utils/utils.js";

export const register = async (req, res) => {
  const { email, username, password } = req.body;

  if(!email || !username || !password){ throw new BadRequestError('Fill in all fields')};
  
  validatePassword(password);

  const usernameAlreadyExists = await User.usernameAlreadyExists(username);
  const emailAlreadyExists = await User.emailAlreadyExists(email);
    
  if(!usernameAlreadyExists && !emailAlreadyExists){
    const newUser = await User.create({ email, username, password });
    const token = await newUser.generateJWT();
    // if(newUser){ return res.status(StatusCodes.CREATED).json(newUser, token)}
    if(newUser){ return res.status(StatusCodes.CREATED).json({ 
      email: newUser.email, 
      username: newUser.username, 
      token 
    }) }
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
    username: foundUser.username, 
    token
  });
}

export const Book = async (req, res) => {
  console.log(req.body);
}