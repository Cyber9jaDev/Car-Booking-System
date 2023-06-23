import { StatusCodes } from "http-status-codes";

export default function ErrorHandlingMiddleware(err, req, res, next){

  // const defaultError = { 
    const message= err.message ?? 'An error occurred';
    const statusCode= err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR
  // }

  // return res.status(defaultError.statusCode).json(err);
  return res.status(statusCode).send({ message, statusCode });
  // return res.status(defaultError.statusCode).json({ message: defaultError.message });
}