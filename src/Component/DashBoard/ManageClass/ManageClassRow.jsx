// import React from 'react';
import { FaCheckCircle, FaTimesCircle, FaRegComments } from "react-icons/fa";

const ManageClassRow = ({ classes, index, handleApproved, handleDeny, handleFeedback }) => {
    const { classPhoto, className, instructorEmail, instructorName, price, status, availableSet } = classes;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={classPhoto} />
                        </div>
                    </div>
                </div>
            </td>
            <td>{className}</td>
            <td>{instructorName}</td>
            <td>{instructorEmail}</td>
            <td>{availableSet}</td>
            <td>{price}</td>
            <td>{status}</td>
            <th>
                <button disabled={classes?.status === 'Approved' || classes?.status === 'denied'} onClick={() => handleApproved(classes)} title="Approved" className={`btn btn-outline btn-xs ${status === 'Approved' ? 'btn-success disabled cursor-not-allowed' : ""} `}><FaCheckCircle></FaCheckCircle></button>
                <button disabled={classes?.status === 'Approved' || classes?.status === 'denied'} onClick={() => handleDeny(classes)} title="Deny" className={`btn btn-outline btn-xs mx-2 ${status === 'denied' ? 'btn-error' : ""}`}><FaTimesCircle></FaTimesCircle></button>
                <button onClick={() => handleFeedback(classes)} title="Feedback" className="btn btn-outline btn-xs"><FaRegComments></FaRegComments></button>
            </th>
        </tr>
    );
};

export default ManageClassRow;