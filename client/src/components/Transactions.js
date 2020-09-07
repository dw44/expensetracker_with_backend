import React, { useContext, useEffect } from 'react';
import Transaction from './Transaction';

import { GlobalContext } from '../context/GlobalState';

const Transactions = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);
  
  useEffect(() => {
    getTransactions();
  }, []);
  
  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </div>
  );
}

export default Transactions;
