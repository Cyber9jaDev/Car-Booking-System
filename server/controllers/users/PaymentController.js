import axios from "axios";
import { BadRequestError, InternalServerError, UnAuthorizedError } from "../../errors/CustomAPIError.js";

export const initializeTransaction = async(req, res, next) => {
  const { email, metadata } = req.body;
  const { data } = await axios.post('https://api.paystack.co/transaction/initialize',
    {
      amount: metadata?.amount * 100, 
      email, 
      callback_url: 'http://localhost:5173/paystack/verify', 
      "metadata": JSON.stringify(metadata)
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_KEY}`,
        'Content-Type': "application/json",
      }
    }
  );

  if(data?.status && data?.message === 'Authorization URL created'){
    return res.status(200).json(data);
  } 
  
  else if(!data.status){
    if(data.message === 'Request failed with status code 401'){
      throw new UnAuthorizedError('Not authorized.');
    }
    if(data.message === 'Request failed with status code 400'){
      throw new BadRequestError('Bad Request');
    }
    throw new InternalServerError(`${data.message}`);
  }
}

export const verifyTransaction = async (req, res, next) => {
  const { reference } = req.params;
  const { data }  = await axios.get(`https://api.paystack.co/transaction/verify/${reference}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_KEY}`,
      }
    }
  );

  if(data?.status && data?.data?.status === 'success'){
    res.metadata = data?.data?.metadata;
    res.reference = data?.data?.reference;
    next();
    // return res.status(200).json(data?.data);
  }
  
  else if(!data.status){
    if(data.message === 'Request failed with status code 401'){
      throw new UnAuthorizedError('Not authorized.');
    }
    if(data.message === 'Request failed with status code 400'){
      throw new BadRequestError('Bad Request');
    }
    throw new InternalServerError(`${data.message}`);
  }
}

export const testing = (req, res) => {
  const { metadata, reference } = res;
  console.log(metadata);
  console.log(reference);

  return res.status(200).json({m: 'dsds'});
}
