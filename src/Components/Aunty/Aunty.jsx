import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = ({meow}) => {
    const ring= useContext(RingContext);
    return (
        <div className=''>
            <h2>Aunty</h2>
            <section className='flex'>
            <Cousin>Mina</Cousin>
            <Cousin ring={ring}>tina</Cousin>
            </section>
        </div>
    );
};

export default Aunty;