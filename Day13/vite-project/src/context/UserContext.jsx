import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    isLoggedIn: false,
  });

  const login = (name, email) => setUser({ name, email, isLoggedIn: true });
  const logout = () => setUser({ name: "", email: "", isLoggedIn: false });
  const updateProfile = (newData) =>
    setUser((prev) => ({ ...prev, ...newData }));

  return (
    <UserContext.Provider value={{ user, login, logout, updateProfile }}>
      {children}
    </UserContext.Provider>
  );
};

/**
 * Custom hook dengan validasi
 */
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext harus digunakan di dalam UserProvider");
  }
  return context;
};
