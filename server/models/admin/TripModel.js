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
  // departureTime:{
  //   type: String,
  //   required: true
  // },
  seats: {
    type: Array,
    default: function(){
      if(this.busType === 'toyota-hiace'){
        return generateSeatNos(16);
      } else if(this.busType === 'mini-bus'){
        return generateSeatNos(12);
      } else if(this.busType === 'sienna'){
        return generateSeatNos(7);
      }
    }
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