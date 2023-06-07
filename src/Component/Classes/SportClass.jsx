import { useEffect, useState } from "react";
import ClassesCard from "./ClassesCard/ClassesCard";


const SportClass = () => {

    const [sports, setSports] = useState([]);
    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setSports(data))
    }, [])
    return (
        <div className="grid md:grid-cols-3 gap-5 mt-32">
            {
                sports.map(sport => <ClassesCard
                    key={sport.enrolledStudents}
                    sport={sport}
                ></ClassesCard>)
            }
        </div>
    );
};

export default SportClass;