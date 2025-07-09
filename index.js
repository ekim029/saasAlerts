const express = require('express');
require('dotenv').config();

const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');

const app = express();

connectDB();

app.use('/auth', authRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Connected to port ${process.env.PORT}`);
})

