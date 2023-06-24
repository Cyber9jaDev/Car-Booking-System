import APICall from "./APICall";
import { payloadType } from '../pages/users/Signup.tsx';

export default class UserService {
  static Register = async (payload: payloadType) => {
    return await APICall('api/v1/register', 'POST', payload);
  }
}