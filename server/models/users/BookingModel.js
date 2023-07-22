import mongoose, { Schema } from "mongoose";

const BookingSchema = new Schema({
  travellingFrom: {
    type: String,
    // required: true
  },
  travellingTo:{
    type: String,
    // required: true,
  },
  departureDate: {
    type: Date,
    // required: true
  },
  metadata: {
    type: Object,
  },
  amount: {
    type: Number,
  },
  user: {
    type: Object
  }

}, { timestamps: true, minimize: false });

const Bookings = mongoose.model('bookings', BookingSchema);

export default Bookings;

