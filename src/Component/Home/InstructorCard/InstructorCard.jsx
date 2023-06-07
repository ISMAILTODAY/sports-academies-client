

const InstructorCard = ({ sport }) => {
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={sport?.coachImg} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{sport?.coach}</h2>
                <p>Classes: {sport?.sport}</p>
                <p>Schedule: {sport?.schedule}</p>
                <div className="card-actions justify-end">

                </div>
            </div>
        </div>
    );
};

export default InstructorCard;