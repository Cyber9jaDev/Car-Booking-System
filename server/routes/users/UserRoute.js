import express from 'express';
import { getAllTrips, login, register } from '../../controllers/users/UserController.js';
const UserRouter = express.Router();

UserRouter.route('/register').post(register);
UserRouter.route('/login').post(login);
UserRouter.route('/all-trips').get(getAllTrips);

export default UserRouter;