/*
Aqui fica a criacao do store e combinacao (junta) os 2 reducers (expenses and filter)
*/

import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses'; //Reducer expenses
import filtersReducer from '../reducers/filters'; //Reducer filters

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
