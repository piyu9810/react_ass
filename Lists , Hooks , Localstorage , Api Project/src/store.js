import { createStore } from "redux";

const initialState = {
    counter: 0
};

// Reducer function
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {...state, counter: state.counter + 1 };
        case "DECREMENT":
            return {...state, counter: state.counter - 1 };
        default:
            return state;
    }
};

// Create store
const store = createStore(counterReducer);

export default store;