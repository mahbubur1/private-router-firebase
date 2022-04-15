import React from 'react';
import { Link } from "react-router-dom";
import useFirebase from '../../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const {user,handleSignOut} = useFirebase();
    return (
        <div className='header'>
            <Link to='/'>HOME</Link>
            <Link to='/products'>PRODUCTS</Link>
            <Link to='/register'>Register</Link>
            <span>{user?.displayName && user.displayName}  </span>
            {
                user?.uid 
                ?
                <button onClick={handleSignOut}>SingOut</button>
                :
                <Link to='/login'>LOGIN</Link>
            }
        </div>
    );
};

export default Header;