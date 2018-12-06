import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('Should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('Should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: ''
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[1] ,expenses[2]]);
});

test('Should add an expense', () => {
    const expense = { 
        id: '123abc',
        description: 'new description',
        note: 'new note',
        amount: 1000,
        createdAt: 1000
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
    const amount =  209500 ;
    const action = { 
            type: 'EDIT_EXPENSE', 
            id: expenses[1].id,
            updates: {
                amount
            }
    }
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
});

test('should not edit an expense if the id not found', () => {
    const amount =  209500 ;
    const action = { 
            type: 'EDIT_EXPENSE', 
            id: '',
            updates: {
                amount
            }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
    
});