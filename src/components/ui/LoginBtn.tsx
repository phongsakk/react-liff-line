import liff from "@line/liff";

const LoginBtn = () => {
  const loginHandler = () => {
    try {
      liff.login();
      // liff.login({ redirectUri: import.meta.env.VITE_LIFF_CALLBACK });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <button type="button" onClick={loginHandler}>
      Login
    </button>
  );
};

export default LoginBtn;
