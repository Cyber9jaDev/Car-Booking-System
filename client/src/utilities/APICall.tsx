import axios, { AxiosResponse } from 'axios';
import { Toast } from './Functions';

export default async function APICall(
  url: string, 
  method: string, 
  data: object, 
  timeout = 10000
  ): Promise<AxiosResponse> {

    const baseUrl = 'http://localhost:5000';
    const currentUser: string | null = localStorage.getItem('currentUser');
    
    if(currentUser) {
      const parsedCurrentUser = JSON.parse(currentUser);
      axios.defaults.headers.common['Authorization'] = `Bearer ${parsedCurrentUser.token}`;
      axios.defaults.headers.common['Content-Type'] = 'application/json';
    }

    if(!url.startsWith('/')){
      url = '/' + url;
      url = url.trim();
    }

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
        return Promise.reject(new Error('The request took too long to complete.'))
      }
      // Handle other errors
      else if(error?.response?.status >= 401 && error?.response?.status <= 403){
        Toast("fail", `${error?.response?.data?.message as string}`);
        localStorage.clear();
        return location.reload();
        // return Promise.reject(new Error('You are not authorized.'));
      }

      else if(error?.response?.status === 400){
        Toast("fail", `${error?.response?.data?.message as string}`);
        return Promise.reject(new Error(`${error?.response?.data?.message as string}`));
        // return Promise.reject(new Error('Sorry your request is invalid. please check your request and try again'));
      }

      else if(error?.response?.status as number === 404){
        Toast("fail", `${error?.response?.data?.message as string}`);
        return Promise.reject(new Error(`${error?.response?.data?.message as string}`));
        // return Promise.reject(new Error('Sorry your request is invalid. please check your request and try again'));
      }

      else if((error?.response?.status as number) >= 500){
        Toast("fail", `${error?.response?.data?.message as string}`);
        return Promise.reject(new Error(`${error?.response?.data?.message as string}`))
        // return Promise.reject(new Error('Sorry your request cannot be processed at this moment please try again later'))
      }
    }
  );

  const response = await axios({ 
    method, 
    url: baseUrl + url, 
    data,
    timeout 
  });

  return response;
}