

const SportsCard = ({ sport }) => {
    console.log(sport)
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={sport.img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{sport.sport}</h2>
                <p>Enrolled: {sport.enrolledStudents}</p>
                <p>Location: {sport.location}</p>
                <div className="card-actions justify-end">

                </div>
            </div>
        </div>
    );
};

export default SportsCard;