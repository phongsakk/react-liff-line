import React from "react";
import liff from "@line/liff";
import { Profile } from "@liff/get-profile";
import {
  useNavigate,
  useLocation
} from "react-router-dom";

import LogoutBtn from "../components/ui/LogoutBtn";
import LoginBtn from "../components/ui/LoginBtn";
import ProfileLine from "../components/ui/ProfileLine";

const Main = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [message, setMessage] = React.useState<string>("");
  const [isLoggedIn, setIsloggedIn] = React.useState<boolean>(false);
  const [user, setUser] = React.useState<Profile>();

  React.useEffect(() => {
    (async () => {
      //
      liff.init({ liffId: import.meta.env.VITE_LIFF_ID }).then(async () => {
        setIsloggedIn(liff.isLoggedIn());
        if (liff.isLoggedIn()) {
          setMessage("welcome");
          setUser(await liff.getProfile());
        } else {
          setMessage("You are not logged in");
        }
      });
    })();

    (async () => {
      const queryParams = new URLSearchParams(location.search);

      if (queryParams.has("code")) {
        queryParams.delete("code");
        navigate("/", { replace: true });
      }
    });
  }, [location.search, navigate]);
  return (
    <div>
      <div>
        <h1>React & LIFF</h1>
        {message}
      </div>
      <div>
        {isLoggedIn ? (
          <LogoutBtn setIsloggedIn={setIsloggedIn} setUser={setUser} />
        ) : (
          <LoginBtn />
        )}
      </div>
      <div>{user && <ProfileLine user={user!} />}</div>
    </div>
  );
};

export default Main;
