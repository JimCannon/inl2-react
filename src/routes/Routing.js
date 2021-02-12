import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RoutingPath from "./RoutingPath";
import { HomeView } from "../views/HomeView";
import { UserContext } from "../shared/provider/UserProvider";
import { SignInView } from "../views/SignInView";
import { PlayersView } from "../views/PlayersView";

export const Routing = (props) => {
  const { authUser } = useContext(UserContext);
  const { starWarsCharacterData } = useContext(UserContext);
  // const [authUser, setAuthUser] = useContext(UserContext);
  // const [starWarsCharacterData, setStarWarsCharacterData] = useContext(UserContext);
  const [authUserTest, setAuthUserTest] = authUser;
  const [starWarsCharacterDataTest, setStarWarsCharacterDataTest] = starWarsCharacterData;

  const checkIfUserIsAuthenticatedInBrowser = () => {
    if (!authUserTest && localStorage.getItem("user")) {
      setAuthUserTest(localStorage.getItem("user"));
    }
  };

  useEffect(() => {
    checkIfUserIsAuthenticatedInBrowser();
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
