import React, { createContext, useReducer, useEffect } from "react";

// Define your action types
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";

// Initial cart state
const initialCart = JSON.parse(localStorage.getItem("cart")) || [];

// Create the Cart Context
export const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }

    case REMOVE_FROM_CART:
      const itemToRemove = state.find((item) => item.id === action.payload);
      if (itemToRemove) {
        if (itemToRemove.quantity > 1) {
          // Reduce quantity by 1
          return state.map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
        } else {
          // Remove the item from cart if quantity is 1
          return state.filter((item) => item.id !== action.payload);
        }
      }
      return state;

    default:
      return state;
  }
};

// Create the CartProvider component
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  // Use effect to save the cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    dispatch({ type: ADD_TO_CART, payload: product });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: REMOVE_FROM_CART, payload: productId });
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, getCartCount }}
    >
      {children}
    </CartContext.Provider>
  );
};
