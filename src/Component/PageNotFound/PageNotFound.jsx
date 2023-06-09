// import React from 'react';

import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div className="w-full relative">

            <img className="w-[100%] h-[30rem]" src="https://i.ibb.co/jDDqRy0/ezgif-com-webp-to-jpg.jpg" alt="" />

            <Link to='/'>  <button className='btn btn-secondary absolute right-[50%]'>Take Me Home</button></Link>
        </div>
    );
};

export default PageNotFound;