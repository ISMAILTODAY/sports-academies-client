

const InstructorCard = ({ sport }) => {
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mb-10 mt-10">
            <figure><img src={sport?.coachImg} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{sport?.instructorName}</h2>
                <p>Classes: {sport?.className}</p>
            </div>
        </div>
    );
};

export default InstructorCard;