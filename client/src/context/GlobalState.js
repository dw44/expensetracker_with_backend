import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// starting state
const startingState = {
  transactions: []
};

// context
export const GlobalContext = createContext(startingState);


// provider
export const GlobalProvider = props => {
  const [state, dispatch] = useReducer(AppReducer, startingState);

  // actions
  const deleteTransaction = id => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
    console.log(state);
  }

  const addTransaction = transaction => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  return (
    <GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction, addTransaction}}>
      {props.children}
    </GlobalContext.Provider>
  );
}