import React from 'react';
import Chart from '../Chart/Chart';
import { useLoaderData } from 'react-router-dom';


const About = () => {
    const data=useLoaderData();
   
    return (
        <div>
            <Chart data={data}></Chart>
        </div>
    );
};

export default About;