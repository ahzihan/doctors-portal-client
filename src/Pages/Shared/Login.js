import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin';
import Loading from './Loading';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        console.log( data );

    };

    return (
        <div className='mx-auto lg:mt-10 shadow-2xl p-4 mt-5 max-w-sm'>
            <form onSubmit={handleSubmit( onSubmit )} className='grid grid-cols-1 gap-5 max-w-xs mx-auto'>
                <h3 className='text-secondary text-center text-xl uppercase font-bold'>Login</h3>
                <div class="form-control w-full max-w-xs">
                    <input type="email" placeholder="Email" class="w-full input input-secondary bg-white max-w-sm" {...register( "email",
                        {
                            required: {
                                value: true,
                                message: 'Email is required'
                            },
                            pattern: {
                                value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                                message: 'Provide a valid email'
                            }
                        } )}
                    />
                    <label class="label">
                        {errors.email?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                    </label>
                </div>
                <div class="form-control w-full max-w-xs">
                    <input type="password" placeholder="Password" class="w-full input input-secondary bg-white max-w-sm" {...register( "password",
                        {
                            required: {
                                value: true,
                                message: 'Password is required'
                            },
                            minLength: {
                                value: 6,
                                message: 'At least 6 character or long'
                            }
                        } )}
                    />
                    <label class="label">
                        {errors.password?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                    </label>
                </div>
                <p><Link className='link text-secondary' to="">Forget Password?</Link></p>
                <input type="submit" value="Login" className="btn bg-gradient-to-r from-secondary to-primary uppercase text-white font-bold border-0 w-full max-w-sm" />
                <p>New to Doctors Portal? <Link className='text-secondary' to="/signup">Create new account</Link></p>
                <div className="divider">OR</div>
            </form>
            <SocialLogin />
        </div>
    );
};

export default Login;