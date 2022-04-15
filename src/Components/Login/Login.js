import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
  const {singInWithGoogle} = useFirebase();
  return (
    <div>
      <h2>Please log in</h2>
      <div style={{marginBottom: '20px'}}>
        <button onClick={singInWithGoogle}>Google Sing in</button>
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
