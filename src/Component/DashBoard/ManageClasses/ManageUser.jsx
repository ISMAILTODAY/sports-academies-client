// import React from 'react';

// import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import ManageUserRow from "./ManageUserRow";
// import ManageClassesRow from "./ManageUserRow";
import { useQuery } from "react-query";
// import { AuthProvider } from "../../AuthContext/AuthContext";

const ManageUser = () => {

    const { data: allUers = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('https://sports-academies-server.vercel.app/user')
        return res.json();
    })

    const handleMakeAdmin = (user) => {

        fetch(`https://sports-academies-server.vercel.app/user/admin/${user?._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user?.name} is now admin`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    refetch()
                }
            })

    }

    const handleMakeInstructor = (user) => {

        fetch(`https://sports-academies-server.vercel.app/user/instructor/${user?._id}`, { method: 'PATCH' })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is now Instructor`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    refetch()
                }
            })

    }


    const handleDelete = (id) => {
        fetch(`https://sports-academies-server.vercel.app/user/${id}`, { method: 'DELETE' })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {

                    Swal.fire({
                        title: 'Are you sure?',
                        text: "You won't be able to revert this!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your class has been deleted.',
                                'success'
                            )
                        }
                    })

                }

            })

    }

    return (
        <div className="w-full overflow-x-auto">
            {/* <h1>total: {selectClass.length}</h1>
        <h1>pay: {price}</h1> */}
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th> Role</th>
                        <th> Action</th>
                    </tr>
                </thead>
                <tbody>

                    {/* {
                    selectClass?.map(selectedClass => <ClassRow
                        key={selectedClass._id}
                        selectedClass={selectedClass}
                        handleDelete={handleDelete}
                    ></ClassRow>)
                } */}
                    {
                        allUers?.map(user => <ManageUserRow
                            key={user._id}
                            user={user}
                            handleMakeAdmin={handleMakeAdmin}
                            handleDelete={handleDelete}
                            handleMakeInstructor={handleMakeInstructor}
                        ></ManageUserRow>)

                    }

                </tbody>
            </table>
        </div>
    );
};

export default ManageUser;