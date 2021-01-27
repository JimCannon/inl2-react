import { useState, createContext } from "react";

//Instead of redux we're using reacts builtin variable passer
export const UserContext = createContext();

//include variables that we're passing
export const UserProvider = (props) => {
  const [authUser, setAuthUser] = useState();
  const { children } = props;

  return (
    <UserContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </UserContext.Provider>
  );
};