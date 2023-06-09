import { FaTrashAlt } from "react-icons/fa";

const ClassRow = ({ selectedClass, handleDelete }) => {

    const { className, instructorName, price, _id } = selectedClass;

    return (
        <tr>
            <th>{className}</th>
            <td>{instructorName}</td>
            <td>{price}</td>
            <td><button onClick={() => handleDelete(_id)}><FaTrashAlt className="text-2xl"></FaTrashAlt></button></td>
        </tr>
    );
};

export default ClassRow;