export default (state, action) => {
  let newState = {}
  switch(action.type) {
    case 'DELETE_TRANSACTION':
      newState = {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      };
      localStorage.setItem('transactions', JSON.stringify(newState.transactions));
      return newState;
    case 'ADD_TRANSACTION':
      newState = {
        ...state,
        transactions: [...state.transactions, action.payload]
      };
      localStorage.setItem('transactions', JSON.stringify(newState.transactions));
      return newState;
    default:
      return state;
  };
}