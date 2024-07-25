import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItemIndex = state.findIndex(item => item.id === action.product.id);
      if (existingItemIndex > -1) {
        // If the item is already in the cart, increase its quantity
        return state.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + action.product.quantity }
            : item
        );
      } else {
        // If the item is not in the cart, add it
        return [...state, { ...action.product }];
      }
    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.id);
    case "UPDATE_QUANTITY":
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: action.quantity } : item
      );
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", product });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", id });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", id, quantity });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
