

const InstructorDetails = ({ sport }) => {
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={sport.coachImg} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title"> Instructor: {sport.instructorName}</h2>
                <p>Classes: {sport.className}</p>
                <p>Email: {sport.instructorEmail}</p>
                <div className="card-actions justify-end">

                </div>
            </div>
        </div>
    );
};

export default InstructorDetails;