import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/MongoDB.js';
import ejs from 'ejs';

dotenv.config();

const port = process.env.PORT || 8000;

const app = express();

connectDB();

app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('home');
});

app.listen(port, ()=>{
    console.log(`Server started at port ${port}`);
});