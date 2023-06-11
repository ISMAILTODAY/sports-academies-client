import { useEffect, useState } from "react";
import ClassesCard from "./ClassesCard/ClassesCard";


const SportClass = () => {

    const [sports, setSports] = useState([]);
    useEffect(() => {
        fetch('https://sports-academies-server.vercel.app/allclass')
            .then(res => res.json())
            .then(data => setSports(data))
    }, [])
    console.log(sports)
    return (
        <div className="grid md:grid-cols-3 gap-5 mt-32">
            {
                sports.map(sportClass => <ClassesCard
                    key={sportClass.enrolledStudents}
                    sport={sportClass}
                ></ClassesCard>)
            }
        </div>
    );
};

export default SportClass;