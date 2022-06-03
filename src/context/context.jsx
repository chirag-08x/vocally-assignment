import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [modal, setModal] = useState({
    isOpen: false,
    text: "",
  });

  const openModal = (text) => {
    setModal({
      isOpen: true,
      text,
    });
  };

  const closeModal = () => {
    setModal({
      isOpen: false,
      text: "",
    });
  };

  return (
    <AppContext.Provider value={{ modal, openModal, closeModal }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
