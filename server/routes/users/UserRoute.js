import express from 'express';
import { getAllTicketsWithAvailableSeats, login, register } from '../../controllers/users/UserController.js';
import { initializeTransaction } from '../../controllers/users/PaymentController.js';
const UserRouter = express.Router();

UserRouter.route('/register').post(register);
UserRouter.route('/login').post(login);
UserRouter.route('/paystack/transaction/initialize').post(initializeTransaction);
// UserRouter.route('/book-ticket').post(bookTicket, updateBookingsList);
UserRouter.route('/all-trips').get(getAllTicketsWithAvailableSeats);

export default UserRouter;