/*
Aqui fica a criacao do store e combinacao (junta) os 2 reducers (expenses and filter)
*/

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expensesReducer from '../reducers/expenses'; //Reducer expenses
import filtersReducer from '../reducers/filters'; //Reducer filters
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
