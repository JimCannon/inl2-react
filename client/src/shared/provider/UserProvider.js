import { useState, createContext } from "react";

//Instead of redux we're using reacts builtin variable passer
export const UserContext = createContext();

//include variables that we're passing
export const UserProvider = (props) => {
  const [authUser, setAuthUser] = useState();
  const [starWarsCharacterData, setStarWarsCharacterData] = useState();
  //put the count in useContext instead so we get the same value for different views
  const [starWarsCharacterCount, setStarWarsCharacterCount] = useState(1);
  const { children } = props;

  return (
    <UserContext.Provider
      value={{
        authUser: [authUser, setAuthUser],
        starWarsCharacterData: [starWarsCharacterData, setStarWarsCharacterData],
        starWarsCharacterCount: [starWarsCharacterCount, setStarWarsCharacterCount],
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
