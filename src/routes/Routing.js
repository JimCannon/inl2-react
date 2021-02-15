import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RoutingPath from "./RoutingPath";
import { HomeView } from "../views/HomeView";
import { UserContext } from "../shared/provider/UserProvider";
import { SignInView } from "../views/SignInView";
import { PlayersView } from "../views/PlayersView";
import StarWarsAPIService from "../shared/api/service/StarWarsAPIService";

export const Routing = (props) => {
  // const [authUser, setAuthUser] = useContext(UserContext);
  // const [starWarsCharacterData, setStarWarsCharacterData] = useContext(UserContext);
  const { starWarsCharacterData } = useContext(UserContext);
  const { authUser } = useContext(UserContext);
  const [authUserTest, setAuthUserTest] = authUser;
  const [starWarsCharacterDataTest, setStarWarsCharacterDataTest] = starWarsCharacterData;
  const [count, setCount] = useState(1);

  const checkIfUserIsAuthenticatedInBrowser = () => {
    if (!authUserTest && localStorage.getItem("user")) {
      setAuthUserTest(localStorage.getItem("user"));
    }
  };

  //
  const getDataFromStarWarsAPI = async () => {
    try {
      const response = await StarWarsAPIService.getStarWarsCharacter(count);
      //Store the data in our state
      setStarWarsCharacterDataTest(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfUserIsAuthenticatedInBrowser();
    //We want make a call to the API the first time we render this page
    getDataFromStarWarsAPI();
  }, []);

  const { children } = props;

  return (
    <Router>
      {children}
      <Switch>
        <Route exact path={RoutingPath.homeView} component={HomeView} />
        <Route exact path={RoutingPath.signInView} component={SignInView} />
        <Route exact path={RoutingPath.playersView} component={PlayersView} />
      </Switch>
    </Router>
  );
};
