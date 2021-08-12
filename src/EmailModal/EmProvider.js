import React, { useContext, useState } from "react";

export const StateContext = React.createContext();

export const useStateContext = () => {
  return useContext(StateContext);
};

export const EMProvider = ({ children }) => {
  const openModalAction = () => {
    setNewState({
      ...newState,
      openModal: true,
    });
  };

  const closeModalAction = () => {
    setNewState({
      ...newState,
      openModal: false,
    });
  };

  const [newState, setNewState] = useState({
    openModal: false,
    openModalAction: openModalAction,
    closeModalAction: closeModalAction,
  });
  return (
    <StateContext.Provider value={newState}>{children}</StateContext.Provider>
  );
};
