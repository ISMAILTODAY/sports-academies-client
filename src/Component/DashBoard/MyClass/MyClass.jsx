// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../../AuthContext/AuthContext";
import MyClassRow from "./MyClassRow";

const MyClass = () => {
    const { user } = useContext(AuthProvider);
    const [myClasses, setMyClasses] = useState([])

    useEffect(() => {
        fetch(`https://sports-academies-server.vercel.app/myclass?instructorEmail=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyClasses(data)
                console.log(data)
            })
    }, [user])

    return (
        <div className="w-full overflow-x-auto">
            <h1>total: { }</h1>
            <h1>pay: { }</h1>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Class</th>
                        <th> Price</th>
                        <th> Enrolled</th>
                        <th> Status</th>
                        <th> Update</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        myClasses?.map((myClass, index) => <MyClassRow
                            key={myClass._id}
                            myClass={myClass}
                            index={index}
                        ></MyClassRow>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyClass;