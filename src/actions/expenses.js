/*
Aqui ficam as acoes relativas aos expenses, que sao enviadas ao reducer junto com o state

Em casa acao ficam objetos planos, dos valores que serão enviados via parametro usando as funcoes, tipo:

No componente tem o dispatch :

dispatch(removeExpense({ id: props.expense.id }));

A funcao removeExpense, mora aqui no arquivo de actions, ele contém :

1- a funcao removeExpense()
2- o parametro passado para funcao ({id} = {}), onde {id} = {} significa se não enviar valor 
para o parametro id o valor default é {} objeto vazio
3- dentro da funcao tempos o type, que vai servir para linkar a funcao action com o reducer
4- o valor que vai ser usado para adicao, edicao ou exclusao.

Actions é tipo local que o dispatch manda a informacao primeiro via paramtro, depois vai para o reducer junto com state


antigo modelo :
1 - component chama action
2 - action retorna um objeto
3 - component dispara (dispatches) o objeto
4 - redux salva as alteracoes


modelo novo com firebase:
1- Componente chama action
2 - action retorna uma funcao
3 - componente dispara (dispatches) function
4 - function executa - e dentro dela pode disparar (dispatches) and do other things
** para isso funcionar tem que instalar um novo modulo - { redux-thunk }

*/

import uuid from 'uuid';
import database from '../firebase/firebase';

// ACTION - ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;

    const expense = { description, note, amount, createdAt};

    return database.ref('expenses').push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }))
    });
  };
};

// ACTION - REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// ACTION - EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

//SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

//
export const startSetExpenses = () => {
  return (dispatch) => {
    return database.ref('expenses').once('value').then((snapshot) => {
      const expenses = [];

      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      
      dispatch(setExpenses(expenses));
    });
  };
};
 
// 1. fetch all expenses data once
// 2. parse that data into an array
// 3. Dispatch SET_EXPENSES 