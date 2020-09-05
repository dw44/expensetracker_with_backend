const express = require('express');
const morgan = require('morgan');
const colors = require('colors');
const dotenv = require('dotenv');

const connectDB = require('./config/db');
const transactions = require('./routes/transactions');

dotenv.config({path: './config/config.env'});

connectDB();
const app = express();

app.use('/api/v1/transactions', transactions);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.green.bold);
});