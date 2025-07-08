const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Coonected to db");
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;