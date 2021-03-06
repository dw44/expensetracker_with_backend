import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { formattedNumber } from '../utils/format';

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  
  return (
    <li className={transaction.amount > 0 ? 'plus' : 'minus'}>
      {transaction.text} <span>{transaction.amount > 0 ? `$${formattedNumber(transaction.amount)}` : `-$${formattedNumber(transaction.amount * -1)}`}</span><button onClick={() => deleteTransaction(transaction._id)} className="delete-btn">x</button>
    </li>
  );
}

export default Transaction;