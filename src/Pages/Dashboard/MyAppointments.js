import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const MyAppointments = () => {
    const [ appointments, setAppointments ] = useState( [] );
    const navigate = useNavigate();
    const [ user ] = useAuthState( auth );
    useEffect( () => {
        if ( user ) {
            fetch( `http://localhost:5000/booking?email=${ user.email }`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${ localStorage.getItem( 'accessToken' ) }`
                }
            } )
                .then( res => {
                    if ( res.status === 401 || res.status === 403 ) {
                        signOut( auth );
                        localStorage.removeItem( 'accessToken' );
                        navigate( '/' );
                    }
                    return res.json();
                } )
                .then( data => {
                    setAppointments( data );
                } );
        }
    }, [ user ] );

    return (
        <div className="overflow-x-auto">
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Treatment</th>
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appointments ? appointments.map( ( a, index ) => <tr key={a._id}>
                            <th>{index + 1}</th>
                            <td>{a.patientName}</td>
                            <td>{a.date}</td>
                            <td>{a.slot}</td>
                            <td>{a.treatment}</td>
                            <td>{( a.price && !a.paid ) && <Link to={`/dashboard/payment/${ a._id }`}><button className='btn btn-xs btn-success'>Pay</button></Link>}</td>
                            <td>{( a.price && a.paid ) && <span className='text-success'>Paid</span>}</td>
                        </tr> )
                            : <tr>
                                <td><h2 className='text-center text-black'>No Data Found</h2></td>
                            </tr>
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyAppointments;