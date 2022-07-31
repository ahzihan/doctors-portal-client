import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

const AddDoctors = () => {
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { data: services, isLoading } = useQuery( [ "services" ], () => fetch( 'http://localhost:5000/service' ).then( res => res.json() ) );

    if ( isLoading ) {
        return <Loading></Loading>;
    }

    const imageStorageKey = `0b609486fbb202f1f14c9a68dec09863`;


    /**
     * 3 ways to store image
     * 1.Third party storage //Free open public storage is ok for practice project
     * 2.Your own storage in your own server (file system)
     * 3.Database: MongoDB
     * 
     * YUP: to validate file : search Yup file validation for react hook form
     */
    const onSubmit = async data => {
        const image = data.image[ 0 ];
        const formData = new FormData();
        formData.append( 'image', image );
        const url = `https://api.imgbb.com/1/upload?key=${ imageStorageKey }`;
        fetch( url, {
            method: 'POST',
            body: formData
        } )
            .then( res => res.json() )
            .then( result => {
                if ( result.success ) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: img
                    };
                    //Send to database 
                    fetch( 'http://localhost:5000/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${ localStorage.getItem( 'accessToken' ) }`
                        },
                        body: JSON.stringify( doctor )
                    } )
                        .then( res => res.json() )
                        .then( data => {
                            if ( data.insertedId ) {
                                toast.success( "Doctor added successfully." );
                                reset();
                            }
                            else {
                                toast.error( 'Failed to add doctor.' );
                            }
                        } );
                }
            } );

    };
    return (
        <form onSubmit={handleSubmit( onSubmit )} className='grid grid-cols-1 gap-5 max-w-md mx-auto'>
            <div className='flex justify-between py-3'>
                <h3 className='text-xl text-secondary font-bold text-center'>Add a New Doctor</h3>
                <Link className="btn-xs btn btn-secondary text-white" to="/dashboard/manageDoctor">View All</Link>
            </div>
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
                <select {...register( "specialty" )} className="w-full input input-secondary bg-white max-w-md">
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