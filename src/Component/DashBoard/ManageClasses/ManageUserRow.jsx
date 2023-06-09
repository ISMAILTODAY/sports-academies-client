// import React from 'react';

const ManageUserRow = ({ user, handleMakeAdmin, handleMakeInstructor, handleDelete }) => {
    return (
        <tr>
            <th>{user.name}</th>
            <td>{user.email}</td>
            <td >{user.role === "admin" ? `admin` : <>
                <button onClick={() => handleMakeAdmin(user)} className="btn btn-outline btn-info mr-5">make admin</button>
            </>}
                {
                    user.role === 'Instructor' ? 'Instructor' : <button onClick={() => handleMakeInstructor(user)} className="btn btn-outline btn-info ml-5">make Instructor</button>
                }
            </td>
            <td><button onClick={() => handleDelete(user._id)} className="btn btn-outline btn-info ">Delete</button></td>
        </tr>
    );
};

export default ManageUserRow;