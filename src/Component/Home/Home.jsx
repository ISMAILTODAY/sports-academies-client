import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SportsCard from "./SpotsCard/SportsCard";
import InstructorCard from "./InstructorCard/InstructorCard";

const Home = () => {
    const [sports, setSports] = useState([]);
    useEffect(() => {
        fetch('https://sports-academies-server.vercel.app/allclass')
            .then(res => res.json())
            .then(data => setSports(data))
    }, [])



    return (

        <div className="mt-32">
            <section>
                <Carousel autoPlay={true} infiniteLoop={true}>
                    <div>
                        <img className="h-full" src="https://i.ibb.co/h8DVW14/slide2.jpg" />

                    </div>
                    <div>
                        <img className="h-full" src="https://i.ibb.co/h8DVW14/slide2.jpg" />

                    </div>
                    <div>
                        <img className="h-full" src="https://i.ibb.co/h8DVW14/slide2.jpg" />

                    </div>
                </Carousel>
            </section>

            {/* popular classes */}
            <section >
                <h1 className="text-center font-bold text-3xl my-5">Popular Classes</h1>


                <div className="grid md:grid-cols-3 gap-5">
                    {
                        sports?.slice(0, 6).map(sport => <SportsCard
                            key={sport.enrolledStudents}
                            sport={sport}
                        ></SportsCard>)
                    }
                </div>

            </section>

            {/* popular instructor section */}

            <section >
                <h1 className="text-center font-bold text-3xl my-5">Popular Instructor</h1>


                <div className="grid md:grid-cols-3 gap-5">
                    {
                        sports.slice(0, 6).map(sport => <InstructorCard
                            key={sport.enrolledStudents}
                            sport={sport}
                        ></InstructorCard>)
                    }
                </div>
            </section>
        </div>

    );
};

export default Home;