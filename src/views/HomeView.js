import { useContext } from "react";
import { UserContext } from "../shared/provider/UserProvider";

export const HomeView = () => {
  const { starWarsCharacterData } = useContext(UserContext);
  const [starWarsCharacterDataTest, setStarWarsCharacterDataTest] = starWarsCharacterData;

  return (
    <div>
      <h1>{starWarsCharacterDataTest?.data?.name}</h1>
    </div>
  );
};
