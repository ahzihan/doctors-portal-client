import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserTable from './UserTable';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery( [ 'users' ], () =>
        fetch( `http://localhost:5000/user`,{
            method: 'GET',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        } )
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
                        <th>Role</th>
                        <th>Edit</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(( user, index ) =><UserTable refetch={refetch} index={index} key={user._id} user={user}></UserTable>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Users;