import { useState, useEffect, useContext } from "react";
import { UserContext } from "../shared/provider/UserProvider";
import StarWarsAPIService from "../shared/api/service/StarWarsAPIService";

export const PlayersView = () => {
  const { starWarsCharacterData } = useContext(UserContext);
  // const [starWarsCharacterData, setStarWarsCharacterData] = useContext(UserContext);
  const [starWarsCharacterDataTest, setStarWarsCharacterDataTest] = starWarsCharacterData;
  const [count, setCount] = useState(1);

  //checks if count is 1. If not, proceed decrementing.
  const unableCountToGetBelow1 = () => {
    count <= 1 ? setCount(1) : setCount(count - 1);
  };

  const getDataFromStarWarsAPI = async () => {
    try {
      const response = await StarWarsAPIService.getStarWarsCharacter(count);
      //Store the data in our state
      setStarWarsCharacterDataTest(response);
    } catch (error) {
      console.log(error);
    }
  };

  // const getDataFromStarWarsAPI = async () => {
  //   try {
  //     const response = await StarWarsAPIService.getStarWarsCharacter(count);
  //     //Store the data in our state
  //     setStarWarsCharacterData(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    //We want make a call to the API the first time we render this page
    getDataFromStarWarsAPI();
  }, [count]);

  return (
    <div>
      {/* Display some delicous data about the character */}
      {/* Using optional chaining incase the data is undefined or null */}
      <h1>Name: {starWarsCharacterDataTest?.data?.name}</h1>
      <h1>Birth Year: {starWarsCharacterDataTest?.data?.birth_year}</h1>
      <h1>Height: {starWarsCharacterDataTest?.data?.height}</h1>
      <h1>Weight: {starWarsCharacterDataTest?.data?.mass}</h1>
      <h1>Gender: {starWarsCharacterDataTest?.data?.gender}</h1>
      <button onClick={() => unableCountToGetBelow1()}>Get previous character</button>
      <button onClick={() => setCount(count + 1)}>Get next chracter</button>
      {console.log(count)}
    </div>
  );
};
