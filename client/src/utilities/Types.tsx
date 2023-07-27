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

export type PaystackInitializerType = {
  status: boolean,
  message: string,
  data: {
    authorization_url: string,
    access_code: string,
    reference: string
  }
}

export type PaystackVerificationType = {
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

export type AuthUserType = {
  email: string,
  userId: string,
  fullName: string,
  phone: string
  token: string
}