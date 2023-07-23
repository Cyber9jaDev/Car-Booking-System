import mongoose, { Schema } from "mongoose";

const BookingSchema = new Schema({
  bookingId: {
    type: String,
    required: true
  },
  passengers: [
    {
      userId: { type: String, required: true },
      metadata: {
        nextOfKinName: { type: String, required: true },
        nextOfKinPhone: { type: String, required: true },
      }
    }
  ],
}, { timestamps: true, minimize: false });

const Bookings = mongoose.model('bookings', BookingSchema);

export default Bookings;

