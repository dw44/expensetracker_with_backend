import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import Transactions from './components/Transactions';
import NewTransaction from './components/NewTransaction';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <Transactions />
        <NewTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
