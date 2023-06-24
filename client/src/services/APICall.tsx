import axios, { AxiosResponse } from 'axios';
import { Toast } from '../utilities/utils';

export default async function APICall(
  url: string, 
  method: string, 
  data: Record<string, string | number>, 
  timeout = 5000
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
      if(response?.data?.token){
        localStorage.setItem('token', response.data.token)
      }
      return response;
    },
    (error) => {
      return error.response;
    }
  );

  const response = await axios({ 
    method, 
    url: baseUrl + url.trim(), 
    data,
    timeout 
  });

  if(response){
    if(response.status === 401){
      Toast('error', 'You are not authorized');
      localStorage.clear();
      window.location.href='/login';
    }

    if(response.status === 400){
      Toast('error', 'Sorry your request is invalid. please check your request and try again"')
    }

    if(response.status >= 500){
      Toast("error", "Sorry your request cannot be processed at this moment please try again later");
    }

    return response;

  } 

  else{
    Toast('error', 'Sorry, it seems you are not connected to the internet. Please check you network connection and try again');
    return null;
  }


}