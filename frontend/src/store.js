import { legacy_createStore as createStore } from 'redux'

const initialState = {
    isAdmin: false,
    cartCount: 0
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_ADMIN':
            return { ...state, isAdmin: action.payload };
        // Add more cases for different actions
        case 'SET_COUNT':
            return { ...state, cartCount: action.payload }
        default:
            return state;
    }
}

const store = createStore(
    reducer
);


export default store;