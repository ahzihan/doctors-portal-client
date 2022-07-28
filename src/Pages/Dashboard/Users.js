import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery( [ 'users' ], () =>
        fetch( `http://localhost:5000/user` )
            .then( res => res.json() )
    );
    if ( isLoading ) {
        return <Loading></Loading>;
    }
    return (
        <div className="overflow-x-auto">
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Email Address</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Treatment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map( ( user, index ) => <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user.email}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr> )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Users;