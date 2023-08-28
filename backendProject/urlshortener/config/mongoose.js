const mongoose = require('mongoose');
require('dotenv').config();
const db = async () => {
    try {
        const connect = await mongoose.connect(process.env.MongoDB);
        console.log("Database Connected: ", connect.connection.host, connect.connection.name);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

module.exports = db;