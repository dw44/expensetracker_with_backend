const Transaction = require('../models/Transaction');

exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find(); // get all transactions
    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions
    });
  } catch (error) {
    return res.send(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

exports.addTransaction = async (req, res, next) => {
  res.send('POST Transacton Pending!');
};

exports.deleteTransaction = async (req, res, next) => {
  res.send('DELETE Transaction Pending!');
};


