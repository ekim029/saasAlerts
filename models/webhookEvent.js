
const mongoose = require('mongoose');

const webhookEventSchema = new mongoose.Schema({
    topic: String,
    shopDomain: String,
    payload: mongoose.Schema.Types.Mixed,
    receivedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('WebhookEvent', webhookEventSchema);