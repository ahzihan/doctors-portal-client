import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate, useLocation } from 'react-router-dom';
import Loading from './Loading';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [ signInWithGoogle, user, loading, error ] = useSignInWithGoogle( auth );

    const from = location.state?.from?.pathname || "/";

    useEffect(()=>{
        if(user){
            navigate(from, { replace: true });
        }
    },[user,from,navigate]);
    
    let errorMessage;
    if(error){
        errorMessage=<p className='text-red-500'>{error?.message}</p>
    }
    if(loading){
        return <Loading></Loading>
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