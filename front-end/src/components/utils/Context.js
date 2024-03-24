import { useState } from "react";
import { createContext } from "react";

export const Context = createContext([]);
export const ContextProvider = ({ children }) => {
  const [signUpUserInfo, setSignUpUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    currencyType: "",
    amount: 0,
  });

  return (
    <Context.Provider value={{ signUpUserInfo, setSignUpUserInfo }}>
      {children}
    </Context.Provider>
  );
};
