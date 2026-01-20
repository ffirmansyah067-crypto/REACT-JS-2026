import React, { createContext, useReducer } from "react";
import { cartReducer, initialCartState } from "../reducers/cartReducer.js";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartState, dispatch] = useReducer(cartReducer, initialCartState);

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}