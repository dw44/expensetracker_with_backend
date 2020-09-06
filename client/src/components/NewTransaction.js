import React, { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { GlobalContext } from '../context/GlobalState';

const NewTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();
    const newTransaction = {
      id: uuidv4(),
      text,
      amount: +amount
    };

    addTransaction(newTransaction);
  }

  return (
    <div>
      <h3>New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Enter Text" />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount<br />
            (negative - expense, positive - income)
          </label>
          <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Enter Amount" />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
}

export default NewTransaction;