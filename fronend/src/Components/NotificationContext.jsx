/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
// NotificationProvider.js

import React, { useState, useEffect, useContext } from "react";

export const NotificationContext = React.createContext();
export const useNotification = () => {
  return useContext(NotificationContext);
};

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null);

  const showNotification = (message) => {
    setNotification(message);
  };

  useEffect(() => {
    let timer;
    if (notification) {
      timer = setTimeout(() => {
        setNotification(null); // Hide the notification after a certain time (e.g., 3 seconds)
      }, 3000);
    }
    return () => {
      clearTimeout(timer); // Clean up the timer when the component unmounts or when a new notification is shown
    };
  }, [notification]);

  return (
    <NotificationContext.Provider value={showNotification}>
      {children}
      {notification && (
        <div className="fixed inline-block   top-20 left-1/2 transform -translate-x-1/2 bg-violet-500 text-white px-4 py-2 rounded shadow-lg z-50">
          <p className="text-center">{notification}</p>
        </div>
      )}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
