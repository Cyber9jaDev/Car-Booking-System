import axios, { AxiosResponse } from 'axios';
import { Toast } from './Functions';

const baseUrl = 'http://localhost:5000';

const getParsedToken = () => localStorage.getItem('token');

axios.interceptors.response.use(
  async (response: AxiosResponse) => {
    if(response?.data){
      if(response?.data.token){
        localStorage.setItem('token', response.data.token)
      }
      return response;
    }
    return response
  },
  async (error) => {
    // Handle timeout error
    if(error.code ==='ECONNABORTED'){
      Toast('fail', 'The request took too long to complete, please check your network connection.');
      // return Promise.reject(new Error('The request took too long to complete.'));
      return Promise.reject(error);
    }
    // Handle other errors
    else if(error?.response?.status >= 401 && error?.response?.status <= 403){
      Toast("fail", `${error?.response?.data?.message as string}`);
      localStorage.clear();
      return location.reload();
    }

    else if(error?.response?.status === 400){
      // Toast("fail", `${error?.response?.data?.message as string}`);
      return Promise.reject(error?.response?.data);
      // return Promise.reject(new Error(`${error?.response?.data?.message as string}`));
      // return Promise.reject(new Error('Sorry your request is invalid. please check your request and try again'));
    }

    else if(error?.response?.status as number === 404){
      // Toast("fail", `${error?.response?.data?.message as string}`);
      return Promise.reject(error?.response?.data);
      // return Promise.reject(new Error(`${error?.response?.data?.message as string}`));
      // return Promise.reject(new Error('Sorry your request is invalid. please check your request and try again'));
    }

    else if((error?.response?.status as number) >= 500){
      // Toast("fail", `${error?.response?.data?.message as string}`);
      return Promise.reject(error?.response?.data);
      // return Promise.reject(new Error(`${error?.response?.data?.message as string}`));
      // return Promise.reject(new Error('Sorry your request cannot be processed at this moment please try again later'))
    }
  }
);

export default async function APICall(
  url: string, 
  method: string, 
  data: object, 
  timeout = 10000
  ): Promise<AxiosResponse> {

    const parsedToken = getParsedToken();
    
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    
    if(parsedToken) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${parsedToken}`;
    }

    const response = await axios({ 
      method, 
      url: baseUrl + (url.startsWith('/') ? url : `/${url}`),
      data,
      timeout 
    });
    return response;
}