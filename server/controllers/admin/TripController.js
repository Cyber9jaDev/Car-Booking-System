import { StatusCodes } from "http-status-codes";
import Trip from "../../models/admin/NewTrip.js";
import { BadRequestError, InternalServerError } from "../../errors/CustomAPIError.js";


export const NewTrip = async (req, res) => {
  const { travellingFrom, travellingTo, departureDate, departureTime, seats, busType } = req.body;
  if(!travellingFrom || !travellingTo || !departureDate || !departureTime || seats.length < 1 || !busType) {
    throw new BadRequestError('Please provide all fields');
  }
  const AddNewTrip = await Trip.create(req.body);
  if(!AddNewTrip){
    throw new InternalServerError('An error occurred');
  };
  res.status(StatusCodes.CREATED).json({ message: 'Trip created successfully'});
}