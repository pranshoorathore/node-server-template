import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/MongoDB.js';

dotenv.config();

const port = process.env.PORT || 8000;

const app = express();

connectDB();

app.listen(port, ()=>{
    console.log(`Server started at port ${port}`);
});