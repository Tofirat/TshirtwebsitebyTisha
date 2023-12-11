import React from 'react';
import { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Brother = () => {
    const [money]=useContext(MoneyContext);
    return (
        <div>
            <h2>My Brother</h2>
            <p>The amount: {money}</p>
        </div>
    );
};

export default Brother;