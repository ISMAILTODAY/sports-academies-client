

const SportsCard = ({ sport }) => {
    console.log(sport)
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={sport.classPhoto} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{sport.className}</h2>
                <p>Enrolled: {sport.enrolledStudents}</p>
            </div>
        </div>
    );
};

export default SportsCard;