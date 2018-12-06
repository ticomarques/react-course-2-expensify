// Expenses Reducer

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];//usamos array destructuring para adicionar novo item ao array de expenses QUE ESTA NO STATE
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
      //Usamos o filter para criar um novo array com todos os itens com ID diferentes do passado
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        };
        //Usamos o map para varrer o array e achar o indice com id igual ao action id, 
        //e depois atualiza-lo com action.updates
      });
    case 'SET_EXPENSES':
      return action.expenses;
    default:
      return state;
  }
};
