"use client";
import { createContext, useContext, useState } from "react";

// Create the context
const GlobalStateContext = createContext();

// Create a provider component
export const GlobalStateProvider = ({ children }) => {
  const [state, setState] = useState({
    lang: "English", // Default language
  });

  // Function to update the language
  const setLanguage = (lang) => {
    setState((prev) => ({
      ...prev,
      lang, 
    }));
  };

  return (
    <GlobalStateContext.Provider value={{ state, setLanguage }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Custom hook for consuming the context
export const useGlobalState = () => {
  return useContext(GlobalStateContext);
};
