import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const {signinusinggoogle}=useAuth();
    return (
        <div>
            <h2>pls login</h2>
            <button onClick={signinusinggoogle} className="text-warning">google sign in</button>
        </div>
    );
};

export default Login;