import { useContext, useEffect, useState } from "react";
import ClassRow from "./ClassRow";
import { AuthProvider } from "../../AuthContext/AuthContext";

const SelectedClass = () => {
    const { user } = useContext(AuthProvider);

    const [selectClass, setSelectClass] = useState([]);

    const token = localStorage.getItem('access-token')

    useEffect(() => {
        fetch(`https://sports-academies-server.vercel.app/selectclass?email=${user?.email}`, {
            headers: {
                authorization: `bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setSelectClass(data)
                console.log(data)
            })
    }, [token, user?.email]);
    const handleDelete = (id) => {
        fetch(`https://sports-academies-server.vercel.app/selectclass/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                const remaining = selectClass.filter(selected => selected._id != id);

                setSelectClass(remaining)
                console.log(data)
            })
    }
    const price = selectClass?.reduce((sum, clas) => clas.price + sum, 0)
    // 
    return (
        <div className="w-full overflow-x-auto">
            <h1>total: {selectClass.length}</h1>
            <h1>pay: {price}</h1>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Class</th>
                        <th>Instructor</th>
                        <th> Price</th>
                        <th> Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        selectClass?.map(selectedClass => <ClassRow
                            key={selectedClass._id}
                            selectedClass={selectedClass}
                            handleDelete={handleDelete}
                        ></ClassRow>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default SelectedClass;