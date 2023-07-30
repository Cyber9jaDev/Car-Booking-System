import express from 'express';
import { initializeTransaction, verifyTransaction } from '../../controllers/users/PaymentController.js';
import { bookTicket, updateBookingsList } from '../../controllers/users/UserController.js';

const PaystackRouter = express.Router();

PaystackRouter.route('/transaction/initialize').post(initializeTransaction);
PaystackRouter.route('/transaction/verify/:reference').get(verifyTransaction);

export default PaystackRouter;