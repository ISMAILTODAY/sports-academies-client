import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SportsCard from "./SpotsCard/SportsCard";

import InstructorCard from "./InstructorCard/InstructorCard";

const Home = () => {
    const [sports, setSports] = useState([]);
    useEffect(() => {
        fetch('fakedata.json')
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
            <section >
                <h1 className="text-center font-bold text-3xl my-5">Popular Classes</h1>


                <div className="grid md:grid-cols-3 gap-5">
                    {
                        sports.map(sport => <SportsCard
                            key={sport.enrolledStudents}
                            sport={sport}
                        ></SportsCard>)
                    }
                </div>

                {/* <div className="grid grid-cols-3 gap-y-8">
                    <div className="border w-[80%]  text-center shadow-lg">
                        <div>
                            <img className="w-[70%] mx-auto" src="https://i.ibb.co/cckmnN5/tack.jpg" alt="" />
                        </div>
                        <div className="flex justify-evenly">
                            <h1>football</h1>
                            <p>students: 100</p>
                        </div>
                    </div>
                    <div className="border w-[80%]  text-center shadow-lg">
                        <div>
                            <img className="w-[70%] mx-auto" src="https://i.ibb.co/cckmnN5/tack.jpg" alt="" />
                        </div>
                        <div className="flex justify-evenly">
                            <h1>football</h1>
                            <p>students: 100</p>
                        </div>
                    </div>
                    <div className="border w-[80%]  text-center shadow-lg">
                        <div>
                            <img className="w-[70%] mx-auto" src="https://i.ibb.co/cckmnN5/tack.jpg" alt="" />
                        </div>
                        <div className="flex justify-evenly">
                            <h1>football</h1>
                            <p>students: 100</p>
                        </div>
                    </div>
                    <div className="border w-[80%]  text-center shadow-lg">
                        <div>
                            <img className="w-[70%] mx-auto" src="https://i.ibb.co/cckmnN5/tack.jpg" alt="" />
                        </div>
                        <div className="flex justify-evenly">
                            <h1>football</h1>
                            <p>students: 100</p>
                        </div>
                    </div>
                    <div className="border w-[80%]  text-center shadow-lg">
                        <div>
                            <img className="w-[70%] mx-auto" src="https://i.ibb.co/cckmnN5/tack.jpg" alt="" />
                        </div>
                        <div className="flex justify-evenly">
                            <h1>football</h1>
                            <p>students: 100</p>
                        </div>
                    </div>
                    <div className="border w-[80%]  text-center shadow-lg">
                        <div>
                            <img className="w-[70%] mx-auto" src="https://i.ibb.co/cckmnN5/tack.jpg" alt="" />
                        </div>
                        <div className="flex justify-evenly">
                            <h1>football</h1>
                            <p>students: 100</p>
                        </div>
                    </div>
                    <div className="border w-[80%]  text-center shadow-lg">
                        <div>
                            <img className="w-[70%] mx-auto" src="https://i.ibb.co/cckmnN5/tack.jpg" alt="" />
                        </div>
                        <div className="flex justify-evenly">
                            <h1>football</h1>
                            <p>students: 100</p>
                        </div>
                    </div>
                </div> */}
            </section>
            {/* popular instructor section */}

            <section >
                <h1 className="text-center font-bold text-3xl my-5">Popular Instructor</h1>


                <div className="grid md:grid-cols-3 gap-5">
                    {
                        sports.map(sport => <InstructorCard
                            key={sport.enrolledStudents}
                            sport={sport}
                        ></InstructorCard>)
                    }
                </div>

                {/* <div className="grid grid-cols-3 gap-y-8">
                    <div className="border w-[80%]  text-center shadow-lg">
                        <div>
                            <img className="w-[70%] mx-auto" src="https://i.ibb.co/cckmnN5/tack.jpg" alt="" />
                        </div>
                        <div className="flex justify-evenly">
                            <h1>Name: Mr. X</h1>
                            <p>students: 100</p>
                        </div>
                    </div>
                    <div className="border w-[80%]  text-center shadow-lg">
                        <div>
                            <img className="w-[70%] mx-auto" src="https://i.ibb.co/cckmnN5/tack.jpg" alt="" />
                        </div>
                        <div className="flex justify-evenly">
                            <h1>Name: Mr. X</h1>
                            <p>students: 100</p>
                        </div>
                    </div>
                    <div className="border w-[80%]  text-center shadow-lg">
                        <div>
                            <img className="w-[70%] mx-auto" src="https://i.ibb.co/cckmnN5/tack.jpg" alt="" />
                        </div>
                        <div className="flex justify-evenly">
                            <h1>Name: Mr. X</h1>
                            <p>students: 100</p>
                        </div>
                    </div>
                    <div className="border w-[80%]  text-center shadow-lg">
                        <div>
                            <img className="w-[70%] mx-auto" src="https://i.ibb.co/cckmnN5/tack.jpg" alt="" />
                        </div>
                        <div className="flex justify-evenly">
                            <h1>Name: Mr. X</h1>
                            <p>students: 100</p>
                        </div>
                    </div>
                    <div className="border w-[80%]  text-center shadow-lg">
                        <div>
                            <img className="w-[70%] mx-auto" src="https://i.ibb.co/cckmnN5/tack.jpg" alt="" />
                        </div>
                        <div className="flex justify-evenly">
                            <h1>Name: Mr. X</h1>
                            <p>students: 100</p>
                        </div>
                    </div>
                    <div className="border w-[80%]  text-center shadow-lg">
                        <div>
                            <img className="w-[70%] mx-auto" src="https://i.ibb.co/cckmnN5/tack.jpg" alt="" />
                        </div>
                        <div className="flex justify-evenly">
                            <h1>Name: Mr. X</h1>
                            <p>students: 100</p>
                        </div>
                    </div>
                    <div className="border w-[80%]  text-center shadow-lg">
                        <div>
                            <img className="w-[70%] mx-auto" src="https://i.ibb.co/cckmnN5/tack.jpg" alt="" />
                        </div>
                        <div className="flex justify-evenly">
                            <h1>Name: Mr. X</h1>
                            <p>students: 100</p>
                        </div>
                    </div>
                </div> */}
            </section>
        </div>

    );
};

export default Home;