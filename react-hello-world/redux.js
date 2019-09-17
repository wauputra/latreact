const redux = require('redux');
const createStore = redux.createStore;

//nilai default
const initialState = {
    value: 0,
    age: 22
}

// REDUCER tahap 2  ( yang mengupdate ) seperti agen
const rootReducer = (state = initialState, action) => {
    /* if (action.type === "ADD_AGE") {
        return {
            ...state,
            age: state.age + 1
        }
    }
    if (action.type === "CHANGE_VALUE") {
        return {
            ...state,
            value: state.value + action.newValue
        }
    } */
    switch (action.type) {
        case 'ADD_AGE':
            return {
                ...state,
                age: state.age + 1
            }
            case 'CHANGE_VALUE':
                return {
                    ...state,
                    value: state.value + action.newValue
                }
                default:
                    return state;
    }
}

// STORE tahap 1 buat store (wadah besar)
const store = createStore(rootReducer);
console.log(store.getState());

// SUBSCRIPTION tahap 4 (proses pemanggilan store yang diperlukan, ketika terjadi perubahan)
store.subscribe(() => {
    console.log('store berubah', store.getState());
})

// DISPATCH tahap 3 (pemanggilan intruksi, pemanggilan reducer) yg ambil agen
store.dispatch({
    type: 'ADD_AGE'
})
store.dispatch({
    type: 'CHANGE_VALUE',
    newValue: 12
})

console.log(store.getState());