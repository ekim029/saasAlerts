const express = require('express');
require('dotenv').config();

const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const captureRawBody = require('./middleware/rawBody');
const verifyShopifyWebhook = require('./middleware/verifyWebhook');

const app = express();

connectDB();

app.use('/auth', authRoutes);
app.use(captureRawBody);
app.use(express.json());
app.use(verifyShopifyWebhook);

app.listen(process.env.PORT, () => {
    console.log(`Connected to port ${process.env.PORT}`);
})

