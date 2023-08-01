import express from 'express';
import { bookTicket, initializeTransaction, updateBookingsList, verifyTransaction } from '../../controllers/users/PaymentController.js';

const PaystackRouter = express.Router();

PaystackRouter.route('/transaction/initialize').post(initializeTransaction);
PaystackRouter.route('/transaction/verify/:reference').get(verifyTransaction, bookTicket, updateBookingsList);

export default PaystackRouter;