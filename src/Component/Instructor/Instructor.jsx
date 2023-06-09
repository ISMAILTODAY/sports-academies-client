import { useEffect, useState } from "react";
import InstructorDetails from "./InstructorDetails/InstructorDetails";


const Instructor = () => {
    const [sports, setSports] = useState([]);
    useEffect(() => {
        fetch('https://sports-academies-server.vercel.app/allclass')
            .then(res => res.json())
            .then(data => setSports(data))
    }, [])

    return (
        <section className="mt-32 mb-16">
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