const express = require('express');
const router = express.Router();
const verifyShopifyWebhook = require('../middleware/verifyWebhook');

router.post('./inventory', verifyShopifyWebhook, (req, res) => {
    console.log("Payload: " + req.body);

    res.status(200).send("Webhook received");
})

module.exports = router;