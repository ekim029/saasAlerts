
const crypto = require('crypto');

function verifyShopifyWebhook(req, res, next) {
    const hmacHeader = req.get('X-Shopify-Hmac-SHA256');

    const generatedHash = crypto
        .createHmac('sha256', process.env.SHOPIFY_API_SECRET)
        .update(req.rawBody, 'utf8')
        .digest('base64');

    if (generatedHash !== hmacHeader) {
        console.warn('Webhook verification failed');
        return res.status(401).send('Unauthorized');
    }

    next();
}

module.exports = verifyShopifyWebhook;
