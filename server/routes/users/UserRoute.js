import express from 'express';
import { bookTicket, getAllSeatsWithAvailableSeats, login, register } from '../../controllers/users/UserController.js';
const UserRouter = express.Router();

UserRouter.route('/register').post(register);
UserRouter.route('/login').post(login);
UserRouter.route('/book-ticket').patch(bookTicket);
UserRouter.route('/all-trips').get(getAllSeatsWithAvailableSeats);

export default UserRouter;