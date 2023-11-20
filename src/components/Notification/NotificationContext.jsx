import React, { createContext, useContext, useState, useEffect } from 'react';

let nextId = 0;
const getUniqueId = () => ++nextId;

const NotificationContext = createContext();

export const useNotifications = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);

    const addNotification = (message, options) => {
        const id = getUniqueId();
        const timer = startTimer(id);
    
        setNotifications((currentNotifications) => [
            ...currentNotifications,
          { id, message, timer, options },
        ]);
      };

    const removeNotification = (id) => {
        setNotifications((currentNotifications) =>
            currentNotifications.filter((n) => n.id !== id)
        );
    };

    useEffect(() => {
        if (notifications.length > 0) {
            const lastNotification = notifications[notifications.length - 1];
            const timer = setTimeout(() => {
                setNotifications((currentNotifications) =>
                    currentNotifications.filter(
                        (n) => n.id !== lastNotification.id
                    )
                );
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [notifications]);

    const startTimer = (id) => {
        const timer = setTimeout(() => {
          removeNotification(id);
        }, 5000);
    
        return timer;
      };

    const stopTimer = (id) => {
        const notification = notifications.find((n) => n.id === id);
        if (notification && notification.timer) {
            clearTimeout(notification.timer);
        }
    };

    return (
        <NotificationContext.Provider
            value={{ addNotification, removeNotification, stopTimer, startTimer, notifications }}
        >
            {children}
        </NotificationContext.Provider>
    );
};
