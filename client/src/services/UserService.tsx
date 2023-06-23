import APICall from "./APICall";
import { payloadType } from '../pages/users/Signup.tsx';

export default class UserService {
  static Register = async (payload: payloadType) => {
    return await APICall('http://localhost:5000/api/v1/register', 'POST', payload);
  }
}