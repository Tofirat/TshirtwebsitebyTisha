import React from 'react';
import './tshirt.css'

const Tshirt = ({tshirt,handleaddtocart}) => {
   const {picture, name, price}=tshirt;
    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <h4>Name:{name}</h4>
            <p>Price: $ {price}</p>
            <button onClick={()=>handleaddtocart(tshirt)}>Buy now</button>
        </div>
    );
};

export default Tshirt;