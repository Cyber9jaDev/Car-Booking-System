export type BookingType = {
  _id: string,
  busType: string,
  travellingFrom: string,
  travellingTo: string,
  departureDate: string,
  departureTime: string,
  price: number,
  bookedSeats: number[],
  availableSeats: number[],
}; 

export type TicketType = {
  tickets: BookingType[],
  currentPage: number,
  totalPages: number
}

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
  status: string,
  reference: string,
  bookingDate: string,
  metadata: {
    passengerName: string,
    passengerPhoneNumber: string,
    nextOfKinName: string,
    nextOfKinPhoneNumber: string,
    amount: number,
    seatNumber: number,
    travellingFrom: string,
    travellingTo: string,
    departureDate: string,
  },
}

export type AuthUserType = {
  email: string,
  userId: string,
  fullName: string,
  phone: string
  token: string
}

export type TripStateType = {
  travellingFrom: string,
  travellingTo: string,
  departureDate: string,
  departureTime: string,
  price: number,
  busType: string,
  isLoading: boolean,
  hasError: boolean,
  
}