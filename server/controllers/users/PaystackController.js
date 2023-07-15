import axios from "axios";
import { BadRequestError, InternalServerError } from "../../errors/CustomAPIError.js";

export const initializeTransaction = async(req, res) => {
  // const { email, amount } = req.body;
  
  const { data } = await axios.post('https://api.paystack.co/transaction/initialize',
  {
    amount: 500000, // Specify the amount to be paid
    email: 'john.doe@example.com', // Specify the customer's email
  },
  {
    headers: {
      'Authorization': `Bearer ${process.env.PAYSTACK_KEY}`,
      'Content-Type': "application/json",
    }
  });
  
  if(!data){ throw new InternalServerError('An error occurred') }

  return res.status(200).json(data)
}