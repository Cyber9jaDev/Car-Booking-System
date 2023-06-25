import axios, { AxiosError, AxiosResponse } from 'axios';
import { Toast } from '../utilities/utils';


export default async function APICall(
  url: string, 
  method: string, 
  data: Record<string, string | number>, 
  timeout = 10000
  ): Promise<unknown> {

    const baseUrl = 'http://localhost:5000';
    const currentUser: string | null = localStorage.getItem('currentUser');
    
    if(currentUser) {
      const parsedCurrentUser = JSON.parse(currentUser);

      axios.defaults.headers.common['Authorization'] = `Bearer ${parsedCurrentUser.token}`;
      axios.defaults.headers.common['Content-Type'] = 'application/json';
    
    }

    if(!url.startsWith('/')){
      url = '/' + url;
    }

  axios.interceptors.response.use(
    (response: AxiosResponse) => {
      if(response?.data){
        if(response?.data.token){
          localStorage.setItem('token', response.data.token)
        }
        return response.data;
      }
    },
    (error: AxiosError) => {
      // Handle timeout error
      if(error.code ==='ECONNABORTED'){
        Toast('error', 'The request took too long to complete, please check your network connection.');
        return Promise.reject(new Error('The request took too long to complete.'))
      }

      // Handle network connectivity error
      if(!error.response || error.response.status === 0){
        Toast("error", "Unable to connect to the server. Please check your network connection.");
        return Promise.reject(new Error('Unable to connect to the server. Please check your network connection.'));
      }

      // Handle other errors
      if(error.response.status === 401){
        Toast('error', 'You are not authorized');
        localStorage.clear();
        window.location.href='/login';
        return Promise.reject(new Error('You are not authorized.'));
      }

      if(error.response.status >= 400 && error.response.status < 500){
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Toast("error", `${(error?.response?.data as any).message as string}`);
        window.location.reload();
        return Promise.reject(new Error('Sorry your request is invalid. please check your request and try again'));
      }

      if(error.response.status >= 500){
        Toast("error", "Sorry your request cannot be processed at this moment please try again later");
        window.location.reload();
        Promise.reject(new Error('Sorry your request cannot be processed at this moment please try again later'))
      }
    }
  );

  const response = await axios({ 
    method, 
    url: baseUrl + url.trim(), 
    data,
    timeout 
  });

  return response;
}