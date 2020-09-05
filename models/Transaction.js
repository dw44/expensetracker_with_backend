const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
  text: {
    type: String,
    trim: true,
    required: [true, 'Please add a transaction description.']
  },
  amount: {
    type: Number,
    required: [true, 'Please enter a value for amount.']
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Transaction', TransactionSchema);