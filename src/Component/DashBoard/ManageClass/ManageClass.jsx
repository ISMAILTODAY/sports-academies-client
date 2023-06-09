// import React from 'react';

// import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import ManageClassRow from "./ManageClassRow";
import { useQuery } from "react-query";

const ManageClass = () => {

    // const [allclasses, setAllClasses] = useState([]);
    // useEffect(() => {
    //     fetch('https://sports-academies-server.vercel.app/allclass')
    //         .then(res => res.json())
    //         .then(data => {
    //             setAllClasses(data)
    //             console.log(data)
    //         })
    // }, [])

    const { data: allclasses = [], refetch } = useQuery(['classes'], async () => {
        const res = await fetch('https://sports-academies-server.vercel.app/allclass')
        return res.json();
    })
    // change status approved
    const handleApproved = (classe) => {
        // console.log(id)
        fetch(`https://sports-academies-server.vercel.app/status/approved/${classe?._id}`, { method: 'PATCH' })
            .then(res => res.json())
            .then(data => {
                refetch()
                console.log(data)
            })
    }

    // change status deny
    const handleDeny = (classe) => {
        // console.log(id)
        fetch(`https://sports-academies-server.vercel.app/status/deny/${classe?._id}`, { method: 'PATCH' })
            .then(res => res.json())
            .then(data => {
                refetch()
                console.log(data)
            })
    }

    // admin feedback
    const handleFeedback = (classe) => {
        Swal.fire({
            input: 'textarea',
            inputLabel: 'Message',
            inputPlaceholder: 'Type your message here...',
            inputAttributes: {
                'aria-label': 'Type your message here'
            },
            showCancelButton: true
        }).then((result) => {
            if (result.value) {
                Swal.fire(result.value);
                console.log(result.value)
                const showcauseOfDeny = { feedback: result.value, className: classe.className, status: classe.status }

                fetch('https://sports-academies-server.vercel.app/feedback', {
                    method: 'POST',
                    headers: {
                        'content-type': ' application/json'
                    },
                    body: JSON.stringify(showcauseOfDeny)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })
            }
        });
    }

    return (
        <div className="overflow-x-auto w-full">
            <table className="table">
                {/* head */}
                <thead>
                    <tr><th>#</th>
                        <th>Class Photo</th>
                        <th>Class Name</th>
                        <th>Instructor</th>
                        <th>Email</th>
                        <th>Available Set</th>
                        <th>Price</th>
                        <th>status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        allclasses?.map((classes, index) => <ManageClassRow
                            key={(classes._id)}
                            classes={classes}
                            index={index}
                            handleApproved={handleApproved}
                            handleDeny={handleDeny}
                            handleFeedback={handleFeedback}
                        ></ManageClassRow>)
                    }


                </tbody>



            </table>
        </div>
    );
};

export default ManageClass;