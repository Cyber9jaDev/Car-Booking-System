import express from 'express';
import { Book, login, register } from '../../controllers/users/UserController.js';
const UserRouter = express.Router();

UserRouter.route('/register').post(register);
UserRouter.route('/login').post(login);
UserRouter.route('/book-ticket').post(Book);

export default UserRouter;