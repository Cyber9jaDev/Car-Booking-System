import express from 'express';
import { initializeTransaction } from '../../controllers/users/PaystackController.js';

const PaystackRouter = express.Router();

PaystackRouter.route('/paystack').get(initializeTransaction);

export default PaystackRouter;