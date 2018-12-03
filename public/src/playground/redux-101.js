import { createStore } from 'redux';

//------- Funcao sendo executada - PARTE 2
const incrementBy = ({ incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementBy = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const reset = ({ reset = 0} = {}) => ({
    type: 'RESET',
    reset
});

const set = ({set} = {}) => ({
    type: 'SET',
    set
});


//------- Jogando o estado no redux - PARTE 3 -> REDUCER
const countReducer = (state = { count : 0}, action)=>{

    switch (action.type) {
        case 'INCREMENT' :
        return {
            count : state.count + action.incrementBy
        };

        case 'DECREMENT' :
        return {
            count : state.count - action.decrementBy
        };

        case 'SET' :
        return {
            count : action.set
        };

        case 'RESET' :
        return {
            count : action.reset
        };

        default:
        return state;
    }
}
const store  = createStore(countReducer);

//------- Tipo evento disparando a funcao - PARTE 1
store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch(incrementBy());
store.dispatch(incrementBy({incrementBy : 10}));
store.dispatch(decrementBy({decrementBy : 3}));


store.dispatch(set({set:101}));

store.dispatch(reset());





/*
const item = ['Coffee','$2.50','$2.75','$3.00'];

const [produto, small, medium, large] = item;

console.log(` O ${produto} no tamanho small custa: ${small}, médio custa ${medium} e grande ${large}`);
*/