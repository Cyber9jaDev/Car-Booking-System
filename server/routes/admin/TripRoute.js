import express from 'express';
import { NewTrip } from '../../controllers/admin/TripController.js';

const AdminRouter = express.Router();

AdminRouter.route('/new-trip').post(NewTrip);

export default AdminRouter;