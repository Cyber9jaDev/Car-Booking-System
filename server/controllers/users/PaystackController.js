import axios from "axios";
import { BadRequestError, InternalServerError } from "../../errors/CustomAPIError.js";

export const initializeTransaction = async(req, res) => {
  // const { email, amount } = req.body;
  
  const { data } = await axios.post('https://api.paystack.co/transaction/initialize',
    {
      amount: 500000, 
      email: 'john.doe@example.com', 
      callback_url: 'http://localhost:5173/paystack/callback', 
      // callback: function(response) {
      //   let reference = response.reference;
      //   alert('Payment complete! Reference: ' + reference);
      //   // Make an AJAX call to your server with the reference to verify the transaction
      // },
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_KEY}`,
        'Content-Type': "application/json",
      }
    }
  );
  
  if(!data.status){ throw new InternalServerError('An error occurred') }

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