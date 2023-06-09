import { useContext, useEffect, useState } from "react";
import ClassRow from "./ClassRow";
import { AuthProvider } from "../../AuthContext/AuthContext";
import Swal from "sweetalert2";


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
            })
    }, [token, user?.email]);
    const handleDelete = (id) => {
        fetch(`https://sports-academies-server.vercel.app/selectclass/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {

                    Swal.fire({
                        title: 'Are you sure?',
                        text: "You won't be able to revert this!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            const remaining = selectClass?.filter(selected => selected._id != id);
                            setSelectClass(remaining)
                            Swal.fire(
                                'Deleted!',
                                'Your class has been deleted.',
                                'success'
                            )
                        }
                    })

                }
            })
    }
    const price = selectClass && selectClass?.reduce((sum, clas) => clas.price + sum, 0)

    return (
        <div className="w-full overflow-x-auto">
            <div className="flex justify-between">
                <div className="text-2xl font-semibold">
                    <h1>total: {selectClass.length}</h1>
                    <h1>Total pay: ${price}</h1>
                </div>
                <button className="btn btn-secondary btn-md mr-12">Pay Now</button>
            </div>
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