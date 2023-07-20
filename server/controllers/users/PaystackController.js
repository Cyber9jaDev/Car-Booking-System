import axios from "axios";
import { BadRequestError, InternalServerError, UnAuthorizedError } from "../../errors/CustomAPIError.js";

export const initializeTransaction = async(req, res) => {
  const { email, amount, fullName, phone } = req.body;
  
  const { data } = await axios.post('https://api.paystack.co/transaction/initialize',
    {
      amount: amount * 100, 
      email, 
      callback_url: 'http://localhost:5173/paystack/callback', 
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_KEY}`,
        'Content-Type': "application/json",
      }
    }
  );
  
  if(data?.message === 'Request failed with status code 401') { throw new UnAuthorizedError('You are not authorized to view this page')}
  if(data?.message === 'Request failed with status code 400') { throw new BadRequestError('Bad request, please check your request and try again.')}
  if(!data.status){ throw new InternalServerError('An error occurred') }

  // Save to Database
  return res.status(200).json(data);
}

export const verifyTransaction = async (req, res) => {
  const { reference } = req.params;
  const { data }  = await axios.get(`https://api.paystack.co/transaction/verify/${reference}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_KEY}`,
      }
    }
  );

  if(!data.status){
    throw new BadRequestError('Bad Request')
  }

  return res.status(200).json(data);
}