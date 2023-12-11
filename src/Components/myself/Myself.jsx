import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Myself = () => {
    const angti=useContext(RingContext)
  
    return (
        <div>
            <h2>My self apurba</h2>
            <p>Ring: {angti}</p>
        </div>
    );
};

export default Myself;