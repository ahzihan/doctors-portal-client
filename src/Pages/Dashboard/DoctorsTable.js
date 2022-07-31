import React from 'react';


const DoctorsTable = ( { doctor, index, setDeleteDoctor } ) => {
    const { name, email, specialty, image } = doctor;

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
            <td>
            <label onClick={()=>setDeleteDoctor(doctor)} for="delete-confirm-modal" class="btn btn-xs btn-error modal-button">Delete</label>
            
            </td>
        </tr>
    );
};

export default DoctorsTable;