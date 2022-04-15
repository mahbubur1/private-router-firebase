import { getAuth } from "firebase/auth";
import React from "react";
import {useSignInWithGoogle} from "react-firebase-hooks/auth"
import { useLocation, useNavigate } from "react-router-dom";
import app from "../../firebase.init";

// import useFirebase from "../../hooks/useFirebase";
const auth = getAuth(app);
const Login = () => {
  // const {singInWithGoogle} = useFirebase();
  const [signInWithGoogle,user] = useSignInWithGoogle(auth);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";

  const handleSignWithGoogle = () => {
    signInWithGoogle()
    .then(() => {
      navigate(from,{ replace: true });
    })
  }
  return (
    <div>
      <h2>Please log in</h2>
      <div style={{marginBottom: '20px'}}>
        {/* singInWithGoogle function call in button */}
        <button onClick={handleSignWithGoogle}>Google Sing in</button>
      </div>

      <form action="">
        <input type="email" name="" id="" placeholder="Your Email" />
        <br />
        <input type="password" name="" id="" placeholder="Password" />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
