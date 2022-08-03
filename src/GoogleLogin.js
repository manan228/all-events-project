import { GoogleLogin } from "react-google-login";
import React from "react";
const clientId =
  "1036153118460-6p711aklh70kj0he6n7b7rmjeoa7ui86.apps.googleusercontent.com";

const Login = () => {
  const onSuccess = (res) => {
    console.log("[Login Success] currentUser:", res.profileObj);
  };

  const onFailure = (res) => {
    console.log("[Login failed] res:", res);
  };

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
};

export default Login;
