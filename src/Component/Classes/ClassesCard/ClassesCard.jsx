

const ClassesCard = ({ sport }) => {
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={sport.img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{sport.sport}</h2>
                <p>Coach: {sport.coach}</p>
                <p>Seat: {sport.availableSet}</p>
                <p>Enrolled ${sport.price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-secondary">Select Class</button>
                </div>
            </div>
        </div>
    );

};

export default ClassesCard;