import axios from 'axios';
// import { payloadType } from './';

export default async function APICall(url: string, method: string, data: unknown){
  const currentUser: string | null = localStorage.getItem('currentUser');
  
  if(currentUser) {
    const parsedCurrentUser = JSON.parse(currentUser);
    axios.defaults.headers.common['Authorization'] = `Bearer ${parsedCurrentUser.token}`;
    axios.defaults.headers.common['Content-Type'] = 'application/json';
  }



  const response = await axios({ method, url, data });

  return !response ? null : response;
}