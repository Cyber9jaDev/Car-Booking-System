import express from 'express';
import { initializeTransaction, testing, verifyTransaction } from '../../controllers/users/PaymentController.js';
import { bookTicket, updateBookingsList } from '../../controllers/users/UserController.js';

const PaystackRouter = express.Router();

PaystackRouter.route('/transaction/initialize').post(initializeTransaction);
PaystackRouter.route('/transaction/verify/:reference').get(verifyTransaction, bookTicket, updateBookingsList);

export default PaystackRouter;