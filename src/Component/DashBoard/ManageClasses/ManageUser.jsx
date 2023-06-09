// import React from 'react';

// import { useEffect, useState } from "react";
import ManageUserRow from "./ManageUserRow";
// import ManageClassesRow from "./ManageUserRow";
import { useQuery } from "react-query";
// import { AuthProvider } from "../../AuthContext/AuthContext";

const ManageUser = () => {

    // const [allUers, setAllUsers] = useState([]);
    // useEffect(() => {
    //     fetch('https://sports-academies-server.vercel.app/user')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setAllUsers(data)
    //         })
    // }, [])

    const { data: allUers = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('https://sports-academies-server.vercel.app/user')
        return res.json();
    })

    const handleMakeAdmin = (user) => {
        // console.log(id)
        fetch(`https://sports-academies-server.vercel.app/user/admin/${user?._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                console.log(data)
            })

    }

    const handleMakeInstructor = (user) => {
        // console.log(id)
        fetch(`https://sports-academies-server.vercel.app/user/instructor/${user?._id}`, { method: 'PATCH' })
            .then(res => res.json())
            .then(data => {
                refetch()
                console.log(data)
            })

    }


    const handleDelete = (id) => {
        fetch(`https://sports-academies-server.vercel.app/user/${id}`, { method: 'DELETE' })
            .then(res => res.json())
            .then(data => {
                refetch()
                console.log(data)
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