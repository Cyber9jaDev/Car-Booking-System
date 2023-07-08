import { Toast } from "./Functions";

export const isValidPassword = (password: string) : boolean =>  {
  const hasWhitespace = /^(?=.*\s)/;
  if(hasWhitespace.test(password)){
    Toast('error',"Password cannot have a whitespace");
    return false;
  }

  const hasUpperCaseChar = /^(?=.*[A-Z])/;
  if(!hasUpperCaseChar.test(password)){
    Toast('error','Password must contain at least one uppercase letter');
    return false;
  }

  const hasLowerCaseChar = /^(?=.*[a-z])/;
  if(!hasLowerCaseChar.test(password)){
    Toast('error','Password must contain at least one lowercase letter');
    return false;
  }

  const hasOneDigit = /^(?=.*[0-9])/;
  if(!hasOneDigit.test(password)){
    Toast('error','Password must contain at least one number');
    return false;
  }

  const hasSpecialChar = /^(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])/;
  if(!hasSpecialChar.test(password)){
    Toast('error','Password must contain at least one special character');
    return false;
  }
  
  const hasSufficientLength = /^.{9,}$/;
  if(!hasSufficientLength.test(password)){
    Toast('error','Password must be at least 8 character long');
    return false;
  }
  return true;
}