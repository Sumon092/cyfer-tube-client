import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { auth } from '../firebase';





const RequiredAuth = ({ children }) => {
    const { currentUser } = useSelector(state => state.user);
    const [loading] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return <h4>Loading...</h4>
    }

    if (!currentUser) {
        return <Navigate to='/signIn' state={{ from: location }} replace></Navigate>
    }
    return children;

};

export default RequiredAuth;