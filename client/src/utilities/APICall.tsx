import axios from 'axios';
import { Toast } from './Functions';

const baseUrl = 'http://localhost:5000';

const getParsedToken = () => localStorage.getItem('token');

axios.interceptors.response.use(
  async (response) => {
    if(response?.data){
      if(response?.data.token){
        localStorage.setItem('token', response.data.token)
      }
      return response;
    }
    return response
  },
  async (error) => {
    if(error.code ==='ECONNABORTED'){   // Handle timeout error 
      Toast('fail', 'The request took too long to complete, please check your network connection.');
      return Promise.reject(error);
    }
    // Handle other errors
    else if(error?.response?.status >= 401 && error?.response?.status <= 403){
      Toast("fail", `${error?.response?.data?.message as string}`);
      localStorage.clear();
      return location.reload();
    } else if(error?.response?.status === 400){
      return Promise.reject(error?.response?.data);
    } else if(error?.response?.status as number === 404){
      return Promise.reject(error?.response?.data);
    } else if((error?.response?.status as number) >= 500){
      return Promise.reject(error?.response?.data);
    }
  }
);

export default async function APICall<T>(
  url: string, 
  method: string, 
  data: object, 
  timeout = 10000
  ): Promise<T> {

    const parsedToken = getParsedToken();
    
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    
    if(parsedToken) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${parsedToken}`;
    }

    const response = await axios({ 
      method,
      timeout,
      url: baseUrl + (url.startsWith('/') ? url : `/${url}`),
      data,
    });
    return response.data as T;
}