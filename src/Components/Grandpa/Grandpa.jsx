import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './grandpa.css'

export const RingContext= createContext('gold');
export const MoneyContext=createContext(0);
const Grandpa = () => {
   const [money,setMoney] =useState(0);
    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <p>Has money:{money}</p>
             {/* <RingContext.Provider value='goldenring'>
             <section className='flex'>
                <Father></Father>
                <Uncle></Uncle>
                <Aunty></Aunty>
              </section>
             </RingContext.Provider> */}

             <MoneyContext.Provider value={[money,setMoney]}>
             <section className='flex'>
                <Father></Father>
                <Uncle></Uncle>
                <Aunty></Aunty>
              </section>

             </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;


/***
 * Context create
 */
