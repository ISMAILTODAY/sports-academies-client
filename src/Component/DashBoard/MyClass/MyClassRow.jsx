// import React from 'react';

import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";

const MyClassRow = ({ myClass, index }) => {

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{myClass.className}</td>
            <td>${myClass.price}</td>
            <td>{ }</td>
            <td>{myClass.status}</td>
            <td><Link to={`/dashboard/myclass/update/${myClass._id}`}><button><FaRegEdit className="text-2xl"></FaRegEdit></button></Link></td>
        </tr>
    );
};

export default MyClassRow;