const express = require('express');
const router = express.Router();

const SHOPIFY_API_KEY = process.env.SHOPIFY_API_KEY;
const SCOPES = process.env.SCOPES;
const HOST = process.env.HOST;

// GET /auth/shopify?shop=your-store.myshopify.com
router.get('/shopify', (req, res) => {
    const shop = req.query.shop;

    if (!shop) {
        return res.status(400).send('Missing "shop" query param');
    }

    const redirectUri = `${HOST}/auth/shopify/callback`;

    const installUrl = `https://${shop}/admin/oauth/authorize` +
        `?client_id=${SHOPIFY_API_KEY}` +
        `&scope=${SCOPES}` +
        `&redirect_uri=${encodeURIComponent(redirectUri)}`;

    console.log(`Redirecting to: ${installUrl}`);
    return res.redirect(installUrl);
});

router.get('/shopify/callback', (req, res) => {
    console.log("Callback hit");
    return res.send("OAuth callback placeholder");
});

module.exports = router;
