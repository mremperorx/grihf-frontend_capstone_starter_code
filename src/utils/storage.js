// src/utils/storage.js

// Local Storage
export const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  export const getLocalStorage = (key) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  };
  
  export const removeLocalStorage = (key) => {
    localStorage.removeItem(key);
  };
  
  // Session Storage
  export const setSessionStorage = (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value));
  };
  
  export const getSessionStorage = (key) => {
    const value = sessionStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  };
  
  export const removeSessionStorage = (key) => {
    sessionStorage.removeItem(key);
  };
  