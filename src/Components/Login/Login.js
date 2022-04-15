import { getAuth } from "firebase/auth";
import React from "react";
import {useSignInWithGoogle} from "react-firebase-hooks/auth"
import app from "../../firebase.init";

// import useFirebase from "../../hooks/useFirebase";
const auth = getAuth(app);
const Login = () => {
  // const {singInWithGoogle} = useFirebase();
  const [signInWithGoogle,user] = useSignInWithGoogle(auth);
  return (
    <div>
      <h2>Please log in</h2>
      <div style={{marginBottom: '20px'}}>
        {/* singInWithGoogle function call in button */}
        <button onClick={() =>signInWithGoogle()}>Google Sing in</button>
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
