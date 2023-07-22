import express from 'express';
import { bookTicket, getAllTrips, login, register } from '../../controllers/users/UserController.js';
const UserRouter = express.Router();

UserRouter.route('/register').post(register);
UserRouter.route('/login').post(login);
UserRouter.route('/book-ticket').patch(bookTicket);
UserRouter.route('/all-trips').get(getAllTrips);

export default UserRouter;