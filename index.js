const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');

const app = express();
connectDB();

app.listen(process.env.PORT, () => {
    console.log(`Connected to port ${process.env.PORT}`);
})