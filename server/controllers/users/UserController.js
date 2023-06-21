import { BadRequestError, InternalServerError, UnAuthorizedError } from "../../errors/CustomAPIError.js";
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

// export const login = async (req, res) => {
//   const { email, password } = req.body;
//   const user = await User.findUserByEmail(email);

//   const isCorrectPassword = await user.isCorrectPassword(password);

//   if(isCorrectPassword === false){ throw new UnAuthorizedError('Password entered is incorrect!')}

//   if(user && isCorrectPassword == true){
//     return res.status(StatusCodes.OK).json(user);
//   }

//   // if(!user){ return res.status(StatusCodes.NOT_FOUND).json({message: 'User not found'}) }

//   if(!user.isCorrectPassword(password)){ 
    
//     return res.status(StatusCodes.UNAUTHORIZED).json({message: "Passwords do not match"});
//     // throw new BadRequestError('Password is incorrect') 
//   }
  
//   // return res.status(StatusCodes.OK).json(user);

// }

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findUserByEmail(email);

  if (!user) {
    throw new UnAuthorizedError('User not found');
  }

  const isCorrectPassword = await user.isCorrectPassword(password);

  if (!isCorrectPassword) {
    throw new UnAuthorizedError('Password entered is incorrect!');
  }

  return res.status(StatusCodes.OK).json(user);
};






