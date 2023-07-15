import APICall from "../utilities/APICall.tsx";

interface AuthUserPayload{
  username?: string,
  email: string,
  password: string,
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

  static InitializeTransaction = async () => {
    return await APICall('api/v1/transaction/initialize', 'GET', {});
  }

  static VerifyTransaction = async () => {
    return await APICall('api/v1/transaction/verify/   ', 'GET', {});
  }

}