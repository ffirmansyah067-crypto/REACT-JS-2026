import React, { createContext, useState, useContext } from "react";

const NotificationContext = createContext();
export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState(0);

  const addNotification = () => setNotifications((prev) => prev + 1);
  const clearNotifications = () => setNotifications(0);

  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification, clearNotifications }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
