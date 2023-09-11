/*
  File: reducer.js
  Description: This file defines the reducer function used in conjunction with the Context API for state management.

  Role:
  - Reducer functions specify how the application's state changes in response to dispatched actions.
  - It helps maintain a predictable and centralized way to update the global state.

  What to Expect:
  - Definition of the initial state and data structure.
  - A switch statement that handles different action types and modifies the state accordingly.
  - Export of the reducer function for use with the Context API.
*/
const cartReducer = (state, action) => {
    // the action object contains: 1. type 2. playload
    const {type, playload } = action
    switch (type) {
        case 'ADD_TO_CART':
            // tiy return the ...state since it may contain other attributes
            return ({...state, cartItems: playload.cartItems, total: playload.total})

        // Implement other cases for different actions
        case 'REMOVE_FROM_CART':
            return ({...state, cartItems: playload.cartItems, total: playload.total})


        default:
            return state;
    }
};

// - Export of the reducer function for use with the Context API.
export default cartReducer;
