import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RoutingPath from "./RoutingPath";
import { HomeView } from "../views/HomeView";
import { UserContext } from "../shared/provider/UserProvider";
import { SignInView } from "../views/SignInView";
import { PlayersView } from "../views/PlayersView";

export const Routing = (props) => {
  const [authUser, setAuthUser] = useContext(UserContext);

  // const checkIfUserIsAuthenticatedInBrowser = () => {
  //   if (!authUser && localStorage.getItem("user")) {
  //     setAuthUser(localStorage.getItem("user"));
  //   }
  // };

  // useEffect(() => {
  //   checkIfUserIsAuthenticatedInBrowser();
  // }, []);

  const { children } = props;

  return (
    <Router>
      {children}
      <Switch>
        <Route exact Path={RoutingPath.homeView} component={HomeView} />
        <Route exact Path={RoutingPath.signInView} component={SignInView} />
        <Route exact Path={RoutingPath.playersView} component={PlayersView} />
      </Switch>
    </Router>
  );
};
