import { useContext } from "react";
import { AuthProvider } from "../../AuthContext/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const ClassesCard = ({ sport }) => {
    const { user } = useContext(AuthProvider)

    const navigate = useNavigate()
    const location = useLocation()
    const handleSelectClass = (sportClass) => {
        const { _id, className, instructorName, price, classPhoto } = sportClass;
        const selectClass = { classId: _id, className, instructorName, classPhoto, price, email: user?.email }

        if (user) {
            fetch(`https://sports-academies-server.vercel.app/selectclass`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectClass)
            })
                .then(res => res.json())
                .then(data => {

                    if (data.acknowledged) (
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class added successfully',
                            showConfirmButton: false,
                            timer: 1000
                        })
                    )
                })
        }
        // TODO: alart

        else {
            navigate('/login', { state: { from: location } })


        }
    }
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mb-10">
            <figure><img src={sport.classPhoto} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{sport.className}</h2>
                <p>Coach: {sport.instructorName}</p>
                <p>Seat: {sport.availableSet}</p>
                <p>Price: ${sport.price}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleSelectClass(sport)} className="btn btn-secondary">Select Class</button>
                </div>
            </div>
        </div>
    );

};

export default ClassesCard;