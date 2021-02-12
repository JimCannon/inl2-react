import { useContext } from "react";
import { UserContext } from "../../shared/provider/UserProvider";
import "./Profile.css";

export const Profile = () => {
  // const [authUser, setAuthUser] = useContext(UserContext);
  const { authUser } = useContext(UserContext);
  const [authUserTest, setAuthUserTest] = authUser;

  return (
    <div className="profileWrapper">
      <img className="profileImg" src={"https://www.thispersondoesnotexist.com/image"} alt=""></img>
      <span className="displayUsername">{authUserTest}</span>
    </div>
  );
};
