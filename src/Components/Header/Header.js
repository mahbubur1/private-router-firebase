import { getAuth,signOut} from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from "react-router-dom";
import app from '../../firebase.init';
import './Header.css'

const auth = getAuth(app);
const Header = () => {
    /* const {user,handleSignOut} = useFirebase(); */
    const [user] = useAuthState(auth)
    return (
        <div className='header'>
            <Link to='/'>HOME</Link>
            <Link to='/products'>PRODUCTS</Link>
            <Link to='/orders'> Orders</Link>
            <Link to='/register'>Register</Link>
            <span>{user?.displayName && user.displayName}  </span>
            {
                user?.uid 
                ?
                <button onClick={()=> signOut(auth)}>SingOut</button>
                :
                <Link to='/login'>LOGIN</Link>
            }
        </div>
    );
};

export default Header;