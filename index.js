const express = require('express');
require('dotenv').config();

const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const shopifyWebhook = require('./routes/webhook');

const app = express();

connectDB();
// app.use(express.json());

app.use('/auth', authRoutes);
app.use('/webhook', shopifyWebhook);

app.listen(process.env.PORT, () => {
    console.log(`Connected to port ${process.env.PORT}`);
})

