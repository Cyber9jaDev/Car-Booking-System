import mongoose, { Schema } from "mongoose";

const generateSeatNos = (noOfSeats) => {
  const seats = [];
  for (let seat = 1; seat <= noOfSeats; seat++) {
    seats.push(seat);
  }
  return seats;
}

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
  availableSeats: {
    type: Array,
    default: function(){
      if(this.busType === 'toyota'){
        return generateSeatNos(14);
      } else if(this.busType === 'minibus'){
        return generateSeatNos(12);
      } else if(this.busType === 'sienna'){
        return generateSeatNos(7);
      }
    }
  },
  bookedSeats: {
    type: Array,
    default: []
  },
  busType: {
    type: String,
    required: true,
  },
  price:{
    type: Number,
    required: true
  }
}, { timestamps: true, minimize: false });

const Trip = mongoose.model('Trip', TripSchema);

export default Trip;