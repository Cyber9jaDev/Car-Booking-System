import express from 'express';
import { signup } from '../../controllers/users/UserController.js';
const UserRouter = express.Router();

UserRouter.route('/signup').post(signup);


export default UserRouter