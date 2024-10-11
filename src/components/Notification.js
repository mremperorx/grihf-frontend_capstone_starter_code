import React, { useEffect } from 'react';

const Notification = ({ message, type, duration, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [duration, onClose]);

  const getNotificationStyles = () => {
    switch (type) {
      case 'success':
        return 'bg-green-500 text-white';
      case 'error':
        return 'bg-red-500 text-white';
      case 'info':
        return 'bg-blue-500 text-white';
      case 'warning':
        return 'bg-yellow-500 text-black';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div
      className={`fixed top-4 right-4 p-4 rounded-md shadow-lg transition-all duration-300 ${getNotificationStyles()}`}
      onClick={onClose}
    >
      {message}
      <button
        className="ml-4 text-sm underline"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
};

export default Notification;
