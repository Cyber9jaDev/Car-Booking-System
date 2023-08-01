import mongoose, { Schema } from "mongoose";

const BookingSchema = new Schema({
  ticketId: {
    type: String,
    required: true
  },
  passengers: [
    {
      reference: { type: String, required: true },
      userId: { type: String, required: true },
      metadata: {
        passengerName: { type: String, required: true },
        passengerPhoneNumber: { type: String, required: true },
        nextOfKinName: { type: String, required: true },
        nextOfKinPhoneNumber: { type: String, required: true },
        amount: { type: Number, required: true },
        seatNumber: { type: Number, required: true }
      }
    }
  ],
}, { timestamps: true, minimize: false });

const Bookings = mongoose.model('bookings', BookingSchema);

export default Bookings;

