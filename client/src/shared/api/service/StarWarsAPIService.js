//http is from Axios, NOT from react
//we are importing the "http" function from Axios
import http from "../StarWarsAPI";

const getStarWarsCharacter = (starWarsCharacterNumber) => {
  return http.get(`/people/${starWarsCharacterNumber}`);
};

export default { getStarWarsCharacter };
