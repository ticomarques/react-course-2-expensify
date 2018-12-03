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

*/

import uuid from 'uuid';

// ACTION - ADD_EXPENSE
export const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

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
