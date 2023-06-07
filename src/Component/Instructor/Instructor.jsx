import { useEffect, useState } from "react";
import InstructorDetails from "./InstructorDetails/InstructorDetails";


const Instructor = () => {
    const [sports, setSports] = useState([]);
    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setSports(data))
    }, [])

    return (
        <section>
            <div className="grid md:grid-cols-3 gap-5">
                {
                    sports.map(sport => <InstructorDetails
                        key={sport.enrolledStudents}
                        sport={sport}
                    ></InstructorDetails>)
                }
            </div>
        </section>
    );
};

export default Instructor;