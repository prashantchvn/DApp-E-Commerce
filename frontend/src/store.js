import { legacy_createStore as createStore } from 'redux'

const initialState = {
    isAdmin: false
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_ADMIN':
            return { ...state, isAdmin: action.payload };
        // Add more cases for different actions
        default:
            return state;
    }
}

const store = createStore(
    reducer
);


export default store;