import React from 'react';
import './Cart.css';
import { RiDeleteBin5Fill } from "react-icons/ri";
const Cart = ({cart,handleremovecart}) => {
    let msg;
    if(cart.length===0){
        msg= <p>Please add some products</p>
    }
    else{
       msg= <p>Order added: {cart.length} </p>
    }
    return (
        <div className='cart'>
            <h2 className={
                cart.length>0?'Blue': 'red'
            }>Order summary</h2>
           
            {msg}
            {
              cart.map(tshirt=><p key={tshirt._id}>{tshirt.name} <button onClick={()=>handleremovecart(tshirt._id)}><RiDeleteBin5Fill /></button></p>)
            }
        </div>
    );
};

export default Cart;

/***
 * Conditional Rendering
 */