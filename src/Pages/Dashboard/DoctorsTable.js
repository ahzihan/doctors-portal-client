import React from 'react';
import { toast } from 'react-toastify';

const DoctorsTable = ( { doctor, index, refetch } ) => {
    const { name, email, specialty, image } = doctor;

    const handleDelete = email => {
        fetch( `http://localhost:5000/doctor/${ email }`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${ localStorage.getItem( 'accessToken' ) }`
            }
        } )
            .then( res => res.json() )
            .then( data => {
                console.log( data );
                if ( data.deletedCount ) {
                    toast.success( `Doctor: ${ name } is deleted` );
                    refetch();
                }
            } );
    };
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-20 rounded">
                        <img src={image} alt="Doctor" />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{specialty}</td>
            <td><button className="btn btn-xs btn-warning">Edit</button></td>
            <td><button onClick={() => handleDelete( email )} className="btn btn-xs btn-error">Remove</button></td>
        </tr>
    );
};

export default DoctorsTable;