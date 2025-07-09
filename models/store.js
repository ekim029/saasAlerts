
const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
    shopDomain: { type: String, unique: true },
    accessToken: String,
    scopes: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Store', storeSchema);