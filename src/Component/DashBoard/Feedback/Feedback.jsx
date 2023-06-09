// import React from 'react';

import { useQuery } from "react-query";
import FeedbackRow from "./FeedbackRow";

const Feedback = () => {

    const { data: feedbacks = [] } = useQuery(['feedback'], async () => {
        const res = await fetch('https://sports-academies-server.vercel.app/feedback')
        return res.json()
    })

    // const { data: allclasses = [], refetch } = useQuery(['classes'], async () => {
    //     const res = await fetch('https://sports-academies-server.vercel.app/allclass')
    //     return res.json();
    // })
    console.log(feedbacks)

    return (
        <div className="w-full overflow-x-auto">

            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Class Name</th>
                        <th>Feedback</th>
                        <th> Status</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        feedbacks?.map(feedback => <FeedbackRow
                            key={feedback._id}
                            feedback={feedback}
                        ></FeedbackRow>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default Feedback;