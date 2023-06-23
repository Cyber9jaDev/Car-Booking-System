import axios from 'axios';
import { Toast } from '../utilities/utils';
// import { payloadType } from './';

export default async function APICall(url: string, method: string, data: unknown){
  const currentUser: string | null = localStorage.getItem('currentUser');
  
  if(currentUser) {
    const parsedCurrentUser = JSON.parse(currentUser);
    axios.defaults.headers.common['Authorization'] = `Bearer ${parsedCurrentUser.token}`;
    axios.defaults.headers.common['Content-Type'] = 'application/json';
  }

  const baseUrl = 'http://localhost:5000';

  if(!url.startsWith('/')){
    url = '/' + url;
  }

  const response = await axios({ 
    method, 
    url: baseUrl + url.trim(), 
    data 
  });

  if(response){
    if(!response.status || response.status === 0){ // No response
      Toast('error', 'Sorry, it seems you are not connected to the internet. Please check you network connection and try again');
      return null;
    }
  }

  else{
    return 
  }

  return !response ? null : response;
}