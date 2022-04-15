import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebase.init";

const auth = getAuth(app);
const Products = () => {
  /*     const {user} = useFirebase();
   */
  const [user] = useAuthState(auth)
  return (
    <div>
      <h3>knock knock ! Who's There?</h3>
      <h4>There is : {user ? user.displayName : "who are you?"}</h4>
      <h6>Products well be coming...........!!</h6>
    </div>
  );
};

export default Products;
