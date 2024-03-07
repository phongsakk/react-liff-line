import liff from "@line/liff";
import { Profile } from "@liff/get-profile";

type TLogoutBtnProps = {
  label?: string;
  setIsloggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<Profile | undefined>>;
  children?: React.JSX.Element;
};

const LogoutBtn = (props: TLogoutBtnProps) => {
  const logoutHandler = () => {
    liff.logout();
    props.setIsloggedIn(false);
    props.setUser(undefined);
  };

  return (
    <button onClick={logoutHandler}>
      {props.label || props.children || "Logout"}
    </button>
  );
};

export default LogoutBtn;
