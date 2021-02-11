import { useState, useEffect } from "react";
import StarWarsAPIService from "../shared/api/service/StarWarsAPIService";

export const PlayersView = () => {
  const [starWarsData, setStarWarsData] = useState();
  const [count, setCount] = useState(1);

  //checks if count is 1. If not, proceed decrementing.
  const unableCountToGetBelow1 = () => {
    count <= 1 ? setCount(1) : setCount(count - 1);
  };

  const getDataFromStarWarsAPI = async () => {
    try {
      const response = await StarWarsAPIService.getStarWarsCharacter(count);
      //Store the data in our state
      setStarWarsData(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //We want make a call to the API the first time we render this page
    getDataFromStarWarsAPI();
  }, [count]);

  return (
    <div>
      {/* Display some delicous data about the character */}
      {/* Using optional chaining incase the data is undefined or null */}
      <h1>Name: {starWarsData?.data?.name}</h1>
      <h1>Birth Year: {starWarsData?.data?.birth_year}</h1>
      <h1>Height: {starWarsData?.data?.height}</h1>
      <h1>Weight: {starWarsData?.data?.mass}</h1>
      <h1>Gender: {starWarsData?.data?.gender}</h1>
      <button onClick={() => unableCountToGetBelow1()}>
        Get previous character
      </button>
      <button onClick={() => setCount(count + 1)}>Get next chracter</button>
      {console.log(count)}
    </div>
  );
};
