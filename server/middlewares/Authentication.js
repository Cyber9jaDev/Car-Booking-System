import jwt from "jsonwebtoken";
import { UnAuthorizedError } from "../errors/CustomAPIError.js";


export default async function Authentication(req, res, next){
  const authorizationHeader = req.headers.authorization;
  if(!authorizationHeader || !authorizationHeader.startsWith('Bearer')){
    throw new UnAuthorizedError('Not authorized');
  }

  const token = authorizationHeader.split(' ')[1];

  try {
    
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: payload.userId }

  } catch (error) {
    throw new UnAuthorizedError('Not authorized');
  }

  next();
}
