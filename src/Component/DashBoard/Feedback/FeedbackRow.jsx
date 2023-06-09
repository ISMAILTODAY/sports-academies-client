// import React from 'react';

const FeedbackRow = ({ feedback }) => {
    return (
        <tr>
            <th>{feedback.className}</th>
            <td>{feedback.feedback}</td>
            <td>{feedback.status}</td>
        </tr>
    );
};

export default FeedbackRow;