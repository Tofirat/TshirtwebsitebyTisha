import React, { Children, useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money,setMoney]=useContext(MoneyContext);
    return (
        <div>
            <h2>Uncle</h2>
            <p>grandpa money:{money}</p>
            <button onClick={()=>setMoney(money+1000)}>Send 1000</button>
            <section className='flex'>
                <Cousin >Tuhi</Cousin>
                <Cousin >Tuly</Cousin>

            </section>
        </div>
    );
};

export default Uncle;