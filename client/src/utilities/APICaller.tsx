import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Toast } from './Functions';

const baseUrl = 'http://localhost:5000';

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response?.data?.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response;
  },
  (error) => {
    // Handle timeout error
    // if (axios.isTimeoutError(error)) {
    //   Toast('fail', 'The request took too long to complete, please check your network connection.');
    //   return Promise.reject(error);
    // }

    // Handle other errors
    if (error?.response?.status >= 401 && error?.response?.status <= 403) {
      Toast('fail', `${error?.response?.data?.message as string}`);
      localStorage.clear();
      return Promise.reject(error);
    } else if (error?.response?.status === 400 || error?.response?.status === 404) {
      Toast('fail', `${error?.response?.data?.message as string}`);
      return Promise.reject(error);
    } else if (error?.response?.status >= 500) {
      Toast('fail', `${error?.response?.data?.message as string}`);
      return Promise.reject(error);
    }

    // For any other error, simply reject with the error object
    return Promise.reject(error);
  }
);

export default async function APICall<T>(
  url: string,
  method: AxiosRequestConfig['method'],
  data: AxiosRequestConfig['data'],
  timeout = 10000
): Promise<AxiosResponse<T>> {
  try {
    const response = await axios({
      method,
      url: baseUrl + (url.startsWith('/') ? url : `/${url}`),
      data,
      timeout,
    });

    return response;
  } catch (error) {
    // Handle any unforeseen errors here
    console.error('Unexpected error occurred during API call:', error);
    throw error;
  }
}
