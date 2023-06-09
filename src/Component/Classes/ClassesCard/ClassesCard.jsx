import { useContext } from "react";
import { AuthProvider } from "../../AuthContext/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";


const ClassesCard = ({ sport }) => {
    const { user } = useContext(AuthProvider)
    console.log(user?.email)

    const navigate = useNavigate()
    const location = useLocation()
    const handleSelectClass = (sportClass) => {
        const { _id, className, instructorName, price, classPhoto } = sportClass;
        const selectClass = { classId: _id, className, instructorName, classPhoto, price, email: user?.email }

        if (user) {
            console.log(sportClass)
            fetch(`https://sports-academies-server.vercel.app/selectclass`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectClass)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        }
        // TODO: alart

        else {
            navigate('/login', { state: { from: location } })


        }
    }
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
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