import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db/connection.js';

const app = express();
dotenv.config();


app.use(express.json());
app.use(cors());


const startApp = async() => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(process.env.PORT, () => console.log('LISTENING ON PORT', process.env.PORT))
  } catch (error) {
    console.log(error);
  }
}


startApp()
