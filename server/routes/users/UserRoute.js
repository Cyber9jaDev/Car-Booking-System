import express from 'express';
import { bookTicket, getAllTicketsWithAvailableSeats, login, register, updateBookingsList } from '../../controllers/users/UserController.js';
import { Test, initializeTransaction } from '../../controllers/users/PaymentController.js';
const UserRouter = express.Router();

UserRouter.route('/register').post(register);
UserRouter.route('/login').post(login);
UserRouter.route('/paystack/transaction/initialize').post(initializeTransaction, Test);
UserRouter.route('/book-ticket').patch(bookTicket, updateBookingsList);
UserRouter.route('/all-trips').get(getAllTicketsWithAvailableSeats);

export default UserRouter;