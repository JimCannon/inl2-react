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

  return (
    <div>
      <form>
        <input
          placeholder="username"
          onChange={(event) =>
            setLoginCredentials({
              ...loginCredentials,
              username: event.target.value,
            })
          }
        />{" "}
        <br />
        <input
          type="password"
          placeholder="password"
          onChange={(event) =>
            setLoginCredentials({
              ...loginCredentials,
              password: event.target.value,
            })
          }
        />
        <br />
        <button onClick={() => signIn()}>Sign in</button>
      </form>
    </div>
  );
};
