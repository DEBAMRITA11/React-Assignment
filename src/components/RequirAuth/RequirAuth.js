import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import auth from '../../firebase.init';

const RequirAuth = ({children}) => {
    const [user] = useAuthState(auth);
    if (user) {
        return children;
    } else {
        return <Navigate to="/Signin" replace />;
    }
       
};

export default RequirAuth;