import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import DoctorsTable from './DoctorsTable';

const ManageDoctors = () => {
    const [deleteDoctor,setDeleteDoctor]=useState(null);
    const { data: doctors, isLoading, refetch } = useQuery( [ 'doctors' ], () => fetch( 'http://localhost:5000/doctor', {
        headers: {
            authorization: `Bearer ${ localStorage.getItem( 'accessToken' ) }`
        }
    } ).then( res => res.json() ) );

    if ( isLoading ) {
        return <Loading></Loading>;
    }

    return (
        <div className="overflow-x-auto">
            <div className='flex justify-between py-3'>
                <h3 className='text-xl text-secondary font-bold'>All Doctors</h3>
                <Link className="btn-xs btn btn-secondary text-white" to="/dashboard/addDoctor">Add New</Link>
            </div>
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Specialty</th>
                        <th>Edit</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        doctors.map( ( doctor, index ) => <DoctorsTable setDeleteDoctor={setDeleteDoctor} refetch={refetch} index={index} key={doctor._id} doctor={doctor}></DoctorsTable> )
                    }
                </tbody>
            </table>
            {
                deleteDoctor && <DeleteConfirmModal refetch={refetch} setDeleteDoctor={setDeleteDoctor} deleteDoctor={deleteDoctor}></DeleteConfirmModal>
            }
        </div>
    );
};

export default ManageDoctors;