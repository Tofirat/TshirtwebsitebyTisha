import React from 'react';
import './Cart.css';
import { RiDeleteBin5Fill } from "react-icons/ri";
const Cart = ({cart,handleremovecart}) => {
    return (
        <div className='cart'>
            <h2>Order summary</h2>
            <p>Order added: {cart.length} </p>
            {
              cart.map(tshirt=><p key={tshirt._id}>{tshirt.name} <button onClick={()=>handleremovecart(tshirt._id)}><RiDeleteBin5Fill /></button></p>)
            }
        </div>
    );
};

export default Cart;