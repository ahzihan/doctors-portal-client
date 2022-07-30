import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const AddDoctors = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const {data: services, isLoading}=useQuery(["services"], ()=>fetch('http://localhost:5000/service').then(res=>res.json()));
    
    if(isLoading){
        return <Loading></Loading>
    }
    /**
     * 3 ways to store image
     * 1.Third party storage //Free open public storage is ok for practice project
     * 2.Your own storage in your own server (file system)
     * 3.Database: MongoDB
     * 
     * YUP: to validate file : search Yup file validation for react hook form
     */
    const onSubmit = async data => {
        console.log(data);
    };
    return (
            <form onSubmit={handleSubmit( onSubmit )} className='grid grid-cols-1 gap-5 max-w-md mx-auto'>
                <h3 className='text-secondary text-center text-xl font-bold'>Add a New Doctor</h3>
                <div className="form-control w-full max-w-md">
                    <input type="name" placeholder="Name" className="w-full input input-secondary bg-white max-w-md" {...register( "name",
                        {
                            required: {
                                value: true,
                                message: 'Name is required'
                            }
                        } )}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.name.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-md">
                    <input type="email" placeholder="Email" className="w-full input input-secondary bg-white max-w-md" {...register( "email",
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
                    <label className="label">
                        {errors.email?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-md">
                    <select {...register( "specialty" )} name='slot' className="w-full input input-secondary bg-white max-w-md">
                            {
                                services.map( service => <option key={service._id} value={service.name}>{service.name}</option> )
                            }
                     </select>
                </div>
                <div className="form-control w-full max-w-md">
                    <input type="file" className="w-full input input-secondary bg-white max-w-md" {...register( "image",
                        {
                            required: {
                                value: true,
                                message: 'Image is required'
                            }
                        } )}
                    />
                    <label className="label">
                        {errors.image?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.image.message}</span>}
                    </label>
                </div>
                <input type="submit" value="ADD" className="btn bg-gradient-to-r from-secondary to-primary uppercase text-white font-bold border-0 w-full max-w-md" />                
            </form>
    );
};

export default AddDoctors;