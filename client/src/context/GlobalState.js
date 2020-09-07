import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import AppReducer from './AppReducer';

// starting state
const startingState = {
  transactions: [],
  error: null,
  loading: true
};

// context
export const GlobalContext = createContext(startingState);


// provider
export const GlobalProvider = props => {
  const [state, dispatch] = useReducer(AppReducer, startingState);

  // actions
  async function getTransactions() {
    try {
      const res = await axios.get('/api/v1/transactions');
      dispatch({
        type: 'GET_TRANSACTIONS',
        payload: res.data.data
      });
    } catch (error) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: error.response.data.error
      });
    }
  }

  const deleteTransaction = async id => {
    try {
      await axios.delete(`/api/v1/transactions/${id}`);
      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
      });
    } catch (error) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: error.response.data.error
      });
    }
  }

  const addTransaction = transaction => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      error: state.error,
      loading: state.loading,
      getTransactions, 
      deleteTransaction, 
      addTransaction
    }}>
      {props.children}
    </GlobalContext.Provider>
  );
}