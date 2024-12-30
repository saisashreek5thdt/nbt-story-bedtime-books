"use client";
import { createContext, useContext, useState } from "react";

// Create the context
const GlobalStateContext = createContext();

// Create a provider component
export const GlobalStateProvider = ({ children }) => {
  const [state, setState] = useState({
    lang: "English", // Default language
<<<<<<< HEAD
=======
    currentPath: "/", // Default path
>>>>>>> b2fe6824f52ab2e6007692ff3b13bbe9ee2664f2
  });

  // Function to update the language
  const setLanguage = (lang) => {
    setState((prev) => ({
      ...prev,
<<<<<<< HEAD
      lang, 
=======
      lang,
    }));
  };

  const setCurrentPath = (path) => {
    setState((prev) => ({
      ...prev,
      currentPath: path,
>>>>>>> b2fe6824f52ab2e6007692ff3b13bbe9ee2664f2
    }));
  };

  return (
<<<<<<< HEAD
    <GlobalStateContext.Provider value={{ state, setLanguage }}>
=======
    <GlobalStateContext.Provider value={{ state, setLanguage, setCurrentPath }}>
>>>>>>> b2fe6824f52ab2e6007692ff3b13bbe9ee2664f2
      {children}
    </GlobalStateContext.Provider>
  );
};

// Custom hook for consuming the context
export const useGlobalState = () => {
  return useContext(GlobalStateContext);
};
