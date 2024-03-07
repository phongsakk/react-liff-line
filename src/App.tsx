import React from "react";
import liff from "@line/liff";

function App() {
  const [message, setMessage] = React.useState<string>("");
  const [isLoggedIn, setIsloggedIn] = React.useState<boolean>(false);

  React.useEffect(() => {
    (async () => {
      //
      liff.init({ liffId: import.meta.env.VITE_LIFF_ID }).then(() => {
        setIsloggedIn(liff.isLoggedIn());
        if (liff.isLoggedIn()) {
          setMessage("welcome");
        } else {
          setMessage("You are not logged in");
        }
      });
    })();
  }, []);

  return (
    <div>
      <div>
        <h1>React & LIFF</h1>
        {message}
      </div>
      <div>{isLoggedIn ? <LogoutBtn /> : <LoginBtn />}</div>
    </div>
  );
}

const LoginBtn = () => {
  const loginHandler = () => {
    liff.login({redirectUri: import.meta.env.VITE_LIFF_CALLBACK});
  };
  return (
    <button type="button" onClick={loginHandler}>
      Login
    </button>
  );
};

type TLogoutBtnProps = {
  label?: string;
  children?: React.JSX.Element;
};
const LogoutBtn = (props: TLogoutBtnProps) => {
  const logoutHandler = () => {
    liff.logout();
  };

  return (
    <button onClick={logoutHandler}>
      {props.label || props.children || "Logout"}
    </button>
  );
};

export default App;
