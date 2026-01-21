import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart harus digunakan di dalam CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItem = (item) => {
    setCart((prev) => [...prev, item]);
    setTotalPrice((prev) => prev + item.price);
  };

  const removeItem = (id) => {
    setCart((prev) => {
      const itemToRemove = prev.find((item) => item.id === id);
      if (!itemToRemove) return prev;
      setTotalPrice((prevPrice) => prevPrice - itemToRemove.price);
      return prev.filter((item) => item.id !== id);
    });
  };

  const clearCart = () => {
    setCart([]);
    setTotalPrice(0);
  };

  return (
    <CartContext.Provider value={{ cart, totalPrice, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
