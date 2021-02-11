import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../shared/provider/UserProvider";
import RoutingPath from "../routes/RoutingPath";

export const SignInView = () => {
  const [loginCredentials, setLoginCredentials] = useState({
    username: "",
    password: "",
  });
  const [authUser, setAuthUser] = useContext(UserContext);
  const history = useHistory();

  const signIn = () => {
    history.push(RoutingPath.homeView);
    setAuthUser(loginCredentials.username);
    localStorage.setItem("user", loginCredentials.username);
    history.push("/home");
  };

  const updateLoginCredentials = (event) => {
    setLoginCredentials({
      ...loginCredentials,
      name: event.target.value,
    });
  };

  return (
    <div>
      <h1>{loginCredentials.username}</h1>
      <h1>{loginCredentials.password}</h1>
      <form>
        <input
          name="username"
          placeholder="username"
          onChange={(event) => updateLoginCredentials(event)}
        />{" "}
        <br />
        <input
          name="password"
          type="password"
          placeholder="password"
          onChange={(event) => updateLoginCredentials(event)}
        />
        <br />
        <button onClick={() => signIn()}>Sign in</button>
      </form>
    </div>
  );
};
