import GoogleLogout from "react-google-login";

const clientId =
  "1036153118460-6p711aklh70kj0he6n7b7rmjeoa7ui86.apps.googleusercontent.com";

const Logout = () => {
  const onSuccess = (res) => {
    console.log(`Logout successfully`);
  };

  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
};

export default Logout;
