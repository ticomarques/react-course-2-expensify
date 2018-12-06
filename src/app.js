import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //conecta com o store
import AppRouter from './routers/AppRouter'; //cria Link e NavLink
import configureStore from './store/configureStore'; //Cria o STORE e combina REDUCERS
  import { startSetExpenses } from './actions/expenses'; //
  import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

const store = configureStore();

  // store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
  // store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
  // store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));
  // store.dispatch(addExpense({ description: 'Internet', amount: 3990 }));

const state = store.getState(); // ?
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});



