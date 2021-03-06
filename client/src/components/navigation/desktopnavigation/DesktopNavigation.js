import { useContext } from "react";
import "./DesktopNavigation.css";
import RoutingPath from "../../../routes/RoutingPath";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../../shared/provider/UserProvider";
import { Profile } from "../../profile/Profile";

export const DesktopNavigation = () => {
  const { authUser } = useContext(UserContext);
  const history = useHistory();
  const [authUserTest, setAuthUserTest] = authUser;

  const displayUserIfAuthenticated = () => {
    return authUserTest ? (
      <div className="profile">
        <Profile />
      </div>
    ) : (
      <span onClick={() => history.push(RoutingPath.signInView)} className="signIn">
        Sign in
      </span>
    );
  };

  return (
    <div className="desktopNavigationWrapper">
      <span onClick={() => history.push(RoutingPath.homeView)}>Home</span>
      {displayUserIfAuthenticated()}
      <span onClick={() => history.push("/players")} className="players">
        Players
      </span>
    </div>
  );
};
