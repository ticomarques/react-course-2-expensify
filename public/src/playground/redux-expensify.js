

// 4- metodos de ação - ACTIONS




// 3- REDUCERS - EXPENSE REDUCER AND FILTER REDUCER









// 2- disparadores das acoes
    //subscribe - manitora as alteracoes
store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses);
}); 

    //dispatch dispara uma acao daquela lista lá de cima com varias ACOES
const expenseOne = store.dispatch(addExpense({description: 'rent', amount: 100, createdAt: -2100}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300, createdAt: -1000}));

//const addFilter = store.dispatch(setTextFilter({text: 'rent'}))

//store.dispatch(removeExpense({id: expenseOne.expense.id}));
//store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));

//store.dispatch(setTextFilter('fee'));
//store.dispatch(setTextFilter(''));

//store.dispatch(sortByDate());
store.dispatch(sortByAmount());

//store.dispatch(setStartDate(2000)); //startDate 125
//store.dispatch(setStartDate()); //startDate undefined
//store.dispatch(setEndDate(999)); //endDate 1250


// 1- Objeto de exemplo
const demoState = {
    expenses: [{
        id: 'fjksjflaks',
        description: 'January rent',
        note : 'This was the final payment for this address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
};

