import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db/connection.js';
import UserRouter from './routes/users/UserRoute.js';
import NotFoundErrorMiddleware from './middlewares/NotFoundErrorMiddleware.js';
import ErrorHandlingMiddleware from './middlewares/ErrorHandlingMiddleware.js';

const app = express();
dotenv.config();


app.use(cors());
app.use(express.json({limit: '50mb'}));


app.use('/api/v1', UserRouter);


// Error Handling Middlewares
app.use(ErrorHandlingMiddleware);
app.use(NotFoundErrorMiddleware);

const startApp = async() => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(process.env.PORT, () => console.log('LISTENING ON PORT', process.env.PORT));
  } catch (error) {
    console.log(error);
  }
}

startApp();
