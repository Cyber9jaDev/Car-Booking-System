import { StatusCodes } from "http-status-codes";
import Trip from "../../models/admin/TripModel.js";
import { BadRequestError, InternalServerError } from "../../errors/CustomAPIError.js";

export const NewTrip = async (req, res) => {
  const { travellingFrom, travellingTo, departureDate, price, busType } = req.body;
  if(!travellingFrom || !travellingTo || !departureDate || !busType || !price) {
    throw new BadRequestError('Please provide all fields');
  }
  const AddNewTrip = await Trip.create(req.body);
  if(!AddNewTrip){
    throw new InternalServerError('An error occurred');
  };
  res.status(StatusCodes.CREATED).json({ message: 'Trip created successfully'});
}