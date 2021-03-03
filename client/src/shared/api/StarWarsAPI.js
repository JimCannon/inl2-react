import Axios from "axios";

//store the base url
const URL = "https://swapi.dev/api/";
//Storing axios functions in "StarWarsAPI"
const StarWarsAPI = Axios.create({
  baseURL: URL,
});

export default StarWarsAPI;
