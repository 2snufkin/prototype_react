/*
  File: context.js
  Description: This file defines the React Context API for managing global state in the application.

  Role:
  - Centralizes the state management and distribution of data across components.
  - Eliminates the need for prop drilling by providing a global state accessible to all components.

  What to Expect:
  - Initialization of the global state and its default values.
  - Creation of the context with createContext(init_state)
  - Definition of the main context provider.
  - Definition of actions and functions to modify the state.
  - Export of the context and its provider for use in other parts of the application.

  ** Using the context in the component
  const {destruct the object} = useCart()

  ** You need to wrap the <App> in the index.js with the provider
        <CartProvider>
        <App>
        </CartProvider>
*/
import React, {createContext, useContext, useReducer} from 'react';
import cartReducer from "../reducers/cartReducer";


//  - Initialization of the global state and its default values.
const initialState = {
    cartItems: [],
    total: 0,
};

// Creation of the context with createContext(init_state)
const CartContext = createContext(initialState);

// Definition of the main context provider and Export.
export const CartProvider = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer, initialState);




    // - Definition of actions and functions to modify the state.
    const addToCart = (product) => {
        // you can't update the state directly, you must use dispatch and pass it an action object
        const updatedProductList = state.cartItems.concat(product);
        dispatch(
            {
                type: 'ADD_TO_CART',
                payload: {
                    cartItems: updatedProductList,
                    total:  calculateTotalPrice(updatedProductList)

                }
            }
        );
    };

    const removeFromCart = (product) => {
        const updatedList = state.cartItems.filter(cartItem => cartItem.id !== product.id)
        dispatch({
            type: "REMOVE_FROM_CART",
            playload: {
                cartItems: updatedList,
                total:  calculateTotalPrice(updatedList)
            }
        })
    }

    const calculateTotalPrice = (products)=> {
        return products.reduce((total, product) => total + product.price, 0);
    }


    // When using the context in the component you will have access to all those attributes
    // usememo(): It ensures that the contextValue object is only recreated when state or addToCart change,
    // preventing unnecessary re-renders of components that use the context.
    const contextValue = {
        cartItems: state.cartItems,
        total: state.total,
        addToCart,
        removeFromCart

    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};

//  - Export of the context to be used in the components as follows:
// why not useContext directly in the component and name it useCart? since you can have multi context
// in the app. Naming each context with custom name will let you differentiate them
export const useCart = () => {
    return useContext(CartContext);
};
