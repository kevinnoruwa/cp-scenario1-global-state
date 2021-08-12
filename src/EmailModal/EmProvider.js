import React, { useContext, useState } from "react";

export const StateContext = React.createContext();

export const useStateContext = () => {
  return useContext(StateContext);
};

export const EMProvider = ({ children }) => {
  const [newState, setNewState] = useState({
    openModal: false,
  });
  return (
    <StateContext.Provider value={newState}>{children}</StateContext.Provider>
  );
};
