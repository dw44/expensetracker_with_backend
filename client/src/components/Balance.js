import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { formattedNumber } from '../utils/format';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => acc += item, 0).toFixed(2);

  return (
    <div>
      <h4>Current Balance</h4>
      <h1 id="balance">${formattedNumber(total)}</h1>
    </div>
  );
}

export default Balance;