const mongoose = require('mongoose');
const connectionString = 'mongodb://127.0.0.1:27017'
const options = {}
function dbConnection() {
mongoose.connect(connectionString, options)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log('Error connecting to MongoDB', err);
    })
}

module.exports = dbConnection;
