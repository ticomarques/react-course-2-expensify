import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter, sortByAmount} from './actions/filters';
import getVisibleExpenses from './selectors/expenses'

import 'normalize.css/normalize.css'
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description : 'Water bill', amount: 4500}));
store.dispatch(addExpense({ description : 'Gas bill', createdAt:1000}));
store.dispatch(addExpense({ description : 'Rent', amount: 109500}));



/*
-- Usado anteriormente para testar setagem de filtro e alteracao para setagem de filtro 2 (bill)

store.dispatch(setTextFilter('water'));

setTimeout(()=>{
    store.dispatch(setTextFilter('bill'));
}, 3000);
*/

const state = store.getState();
const visibleExpenses =  getVisibleExpenses(state.expenses, state.filters);
//console.log(visibleExpenses);

// addExpense -> water bill
// addExpense -> gas bill 
// set filter -> bill (2 items) -> water (1 item)
// getVisible -> print visibles ones to screen


console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx , document.getElementById('app'));


