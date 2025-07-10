const express = require('express');
require('dotenv').config();

const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const captureRawBody = require('./middleware/rawBody');
const verifyShopifyWebhook = require('./middleware/verifyWebhook');
const shopifyWebhook = require('./routes/webhook');

const app = express();

connectDB();

app.use('/auth', authRoutes);
app.use(captureRawBody);
app.use(express.json());
app.use(verifyShopifyWebhook);
app.use(shopifyWebhook);

app.listen(process.env.PORT, () => {
    console.log(`Connected to port ${process.env.PORT}`);
})

