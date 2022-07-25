import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate, useLocation } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [ signInWithGoogle, user, loading, error ] = useSignInWithGoogle( auth );

    const from = location.state?.from?.pathname || "/";


    if ( error ) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if ( loading ) {
        return <p>Loading...</p>;
    }
    if ( user ) {
        console.log( user );
        navigate( '/' );

    }
    const handleSocialLogin = async () => {
        await signInWithGoogle();
    };
    return (
        <div>
            <button onClick={handleSocialLogin} className="btn bg-gradient-to-r from-secondary to-primary uppercase text-white font-bold border-0 w-full max-w-sm">CONTINUE WITH GOOGLE</button>
        </div>
    );
};

export default SocialLogin;