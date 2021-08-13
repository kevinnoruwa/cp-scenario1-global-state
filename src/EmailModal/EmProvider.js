import React, { useContext, useState } from "react";
import Cookies from "js-cookie";

export const StateContext = React.createContext();

export const useStateContext = () => {
  return useContext(StateContext);
};

export const EMProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModalAction = () => {
    Cookies.set("modalOpenedBefore", true, { expires: 7 });
    setModalOpen(true);
  };

  const closeModalAction = () => {
    setModalOpen(false);
  };

  const [email, setEmail] = useState("");

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const [ShowEmailError, SetShowEmailError] = useState(false);

  const checkForEmail = (e) => {
    function emailIsValid(text) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text);
    }

    if (emailIsValid(email)) {
    } else {
      SetShowEmailError(true);
    }
  };

  const removeErrorMessage = (e) => {
    SetShowEmailError(false);
  };

  const [formCompleted, setFormCompleted] = useState(false);

  const submittedForm = (e) => {
    e.preventDefault();
    if (ShowEmailError == false && email.length > 5) {
      setFormCompleted(true);
      setTimeout(() => {
        closeModalAction();
      }, 3000);
    }
  };

  return (
    <StateContext.Provider
      value={{
        email,
        handleEmailInput,
        modalOpen,
        closeModalAction,
        checkForEmail,
        removeErrorMessage,
        openModalAction,
        ShowEmailError,
        formCompleted,
        submittedForm,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
