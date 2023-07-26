export type BookingType = {
  _id: string,
  busType: string,
  travellingFrom: string,
  travellingTo: string,
  departureDate: string,
  price: number,
  bookedSeats: number[],
  availableSeats: number[],
}; 


export type VerificationTypes = {
    data: {
      status: string,
      reference: string,
      amount: number,
      metadata: {
        userId: string,
        ticketId: string,
        passengerName: string,
        passengerPhoneNumber: string,
        nextOfKinName: string,
        nextOfKinPhoneNumber: string,
        amount: number,
        seatNumber: number
      },
    }
}
