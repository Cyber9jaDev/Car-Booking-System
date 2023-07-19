import APICall from "../utilities/APICall.tsx";

interface AuthUserPayload{
  username?: string,
  email: string,
  password: string,
}

type PaystackType = {
  email: string,
  amount: number,
  fullName: string,
  phone: string
}

export default class UserService {
  static Register = async (data: AuthUserPayload) => {
    return await APICall('api/v1/register', 'POST', data);
  }

  static Login = async (data: AuthUserPayload) => {
    return await APICall('api/v1/login', 'POST', data);
  }

  static GetAllTrips = async () => {
    return await APICall('api/v1/all-trips', 'GET', {});
  }

  static InitializePaystackTransaction = async (body: PaystackType) => {
    return await APICall('api/v1/paystack/transaction/initialize', 'POST', body);
  }

  static VerifyPaystackTransaction = async () => {
    return await APICall('api/v1/paystack/transaction/verify/   ', 'GET', {});
  }

}