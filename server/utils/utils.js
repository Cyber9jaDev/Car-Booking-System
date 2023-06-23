import { BadRequestError } from "../errors/CustomAPIError.js";

export const validatePassword = (password) =>  {
  let hasWhitespace = /^(?=.*\s)/;
  if(hasWhitespace.test(password)){
    throw new BadRequestError("Password cannot have a whitespace");
  }

  let hasUpperCaseChar = /^(?=.*[A-Z])/;
  if(!hasUpperCaseChar.test(password)){
    throw new BadRequestError('Password must contain at least one uppercase letter');
  }

  let hasLowerCaseChar = /^(?=.*[a-z])/;
  if(!hasLowerCaseChar.test(password)){
    throw new BadRequestError('Password must contain at least one lowercase letter');
  }

  let hasOneDigit = /^(?=.*[0-9])/;
  if(!hasOneDigit.test(password)){
    throw new BadRequestError('Password must contain at least one number');
  }

  let hasSpecialChar = /^(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])/;
  if(!hasSpecialChar.test(password)){
    throw new BadRequestError('Password must contain at least one special character');
  }
  
  let hasSufficientLength = /^.{9,}$/;
  if(!hasSufficientLength.test(password)){
    throw new BadRequestError('Password must be at least 8 character long');
  }
  // return true;
}