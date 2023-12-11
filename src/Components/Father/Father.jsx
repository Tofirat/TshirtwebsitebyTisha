import React from 'react';
import Myself from '../myself/Myself';
import Brother from '../Brother/Brother';

const Father = () => {
    return (
        <div>
            <h2>Father</h2>
            <section className='flex'>
                <Myself></Myself>
                <Brother></Brother>
            </section>
        </div>
    );
};

export default Father;