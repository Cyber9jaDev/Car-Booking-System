import mongoose, { Schema } from "mongoose";

const BookingSchema = new Schema({
  ticketId: {
    type: String,
    required: true
  },
  passengers: [
    {
      userId: { type: String, required: true },
      metadata: {
        nextOfKinName: { type: String, required: true },
        nextOfKinPhoneNumber: { type: String, required: true },
        amount: { type: Number, required: true },
        seatNumber: { type: Number, required: true },
      }
    }
  ],
}, { timestamps: true, minimize: false });

const Bookings = mongoose.model('bookings', BookingSchema);

export default Bookings;

