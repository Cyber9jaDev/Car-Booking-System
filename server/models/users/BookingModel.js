import mongoose, { Schema } from "mongoose";

const BookingSchema = new Schema({
  travellingFrom: {
    type: String,
    required: true
  },
  travellingTo:{
    type: String,
    required: true,
  },
  departureDate: {
    type: Date,
    required: true
  },
  returnDate: {
    type: Date,
    required: true,
  },
  passengers: {
    type: Number,
    default: 1
  },
  sortBy: {
    type: String,
  },
  bus: {
    type: String,
    default: 'all'
  },
  transportCompany: {
    type: String,
    default:'all'
  }

}, { timestamps: true, minimize: false });

const Bookings = mongoose.model('bookings', BookingSchema);

export default Bookings;

