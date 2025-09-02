const express = require('express');
const router = express.Router();
const verifyShopifyWebhook = require('../middleware/verifyWebhook');
const WebhookEvent = require('../models/webhookEvent');
const captureBody = require('../middleware/rawBody');

router.post('/inventory', captureBody, async (req, res) => {
    const topic = req.get('X-Shopify-Topic');
    const shop = req.get('X-Shopify-Shop-Domain');

    let payload;
    try {
        payload = req.rawBody ? JSON.parse(req.rawBody) : null;
    } catch (err) {
        console.error('Invalid JSON payload', req.rawBody);
        return res.status(400).send('Invalid JSON');
    }

    console.log('Payload received:', payload);

    if (payload) {
        await WebhookEvent.create({
            topic,
            shopDomain: shop,
            payload
        });

        const { inventory_item_id, available } = payload;

        if (available < Number(process.env.THRESHOLD)) {
            console.log(`Low stock: Item ${inventory_item_id} has ${available} left`);
        }
    }
    res.status(200).send('Webhook received');
})

module.exports = router;