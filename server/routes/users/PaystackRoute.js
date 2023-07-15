import express from 'express';
import { initializeTransaction, verifyTransaction } from '../../controllers/users/PaystackController.js';

const PaystackRouter = express.Router();

PaystackRouter.route('/transaction/initialize').get(initializeTransaction);
PaystackRouter.route('/transaction/verify/:reference').get(verifyTransaction);

export default PaystackRouter;