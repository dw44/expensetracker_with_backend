const express = require('express');
const router = express.Router();
const transactions = require('../controllers/transactionController');

router
  .route('/')
  .get(transactions.getTransactions)
  .post(transactions.addTransaction);

router
  .route('/:id')
  .delete(transactions.deleteTransaction);

module.exports = router;