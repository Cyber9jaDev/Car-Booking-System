import mongoose, { Schema } from "mongoose";

const TripSchema = new Schema({
  travellingFrom: {
    type: String,
    required: true,
  },
  travellingTo: {
    type: String,
    required: true,
  },
  departureDate: {
    type: String,
    required: true,
  },
  departureTime:{
    type: String,
    required: true
  },
  seats: {
    type: Array,
    required: true,
  },
  busType: {
    type: String,
    required: true,
  },
}, { timestamps: true, minimize: false });

const Trip = mongoose.model('Trip', TripSchema);

export default Trip;