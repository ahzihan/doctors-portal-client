import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {useCreateUserWithEmailAndPassword,useUpdateProfile} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import SocialLogin from "./SocialLogin";
import Loading from "./Loading";


const SignUp = () => {
  const {register,formState: { errors }, handleSubmit} = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, uError] = useUpdateProfile(auth);
  let errorMessage;

  useEffect(()=>{
    if(user){
        navigate(from, { replace: true });
    }
},[user,from,navigate]);
  if (error || uError) {
    errorMessage = (
      <p className="text-red-500">{error?.message || uError?.message}</p>
    );
  }

  if (loading || updating) {
    return <Loading></Loading>;
  }
  

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };

  return (
    <div className="mx-auto lg:mt-10 shadow-2xl p-4 mt-5 max-w-sm">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-5 max-w-xs mx-auto"
      >
        <h3 className="text-secondary text-center text-xl uppercase font-bold">
          Sign Up
        </h3>
        {errorMessage}
        <div className="form-control w-full max-w-xs">
          <input
            type="name"
            placeholder="Name"
            className="w-full input input-secondary bg-white max-w-sm"
            {...register("name", {
              required: {
                value: true,
                message: "Name is required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <input
            type="email"
            placeholder="Email"
            className="w-full input input-secondary bg-white max-w-sm"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                message: "Provide a valid email",
              },
            })}
          />
          <label className="label">
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <input
            type="password"
            placeholder="Password"
            className="w-full input input-secondary bg-white max-w-sm"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
              minLength: {
                value: 6,
                message: "At least 6 character or long",
              },
            })}
          />
          <label className="label">
            {errors.password?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.password.message}
              </span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="label-text-alt text-red-500">
                {errors.password.message}
              </span>
            )}
          </label>
        </div>
        <input
          type="submit"
          value="Sign Up"
          className="btn bg-gradient-to-r from-secondary to-primary uppercase text-white font-bold border-0 w-full max-w-sm"
        />
        <p>
          Already have an account?{" "}
          <Link className="text-secondary" to="/login">
            Login
          </Link>
        </p>
        <div className="divider">OR</div>
      </form>
      <SocialLogin />
    </div>
  );
};

export default SignUp;
