

const ClassRow = ({ selectedClass, handleDelete }) => {

    const { className, instructorName, price, _id } = selectedClass;

    return (
        <tr>
            <th>{className}</th>
            <td>{instructorName}</td>
            <td>{price}</td>
            <td><button onClick={() => handleDelete(_id)}>delete</button></td>
        </tr>
    );
};

export default ClassRow;