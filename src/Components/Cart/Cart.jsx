import React from 'react';
import './Cart.css';
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";

const Cart = ({cart, handleremovecart}) => {
    // Calculate total price
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const tax = total * 0.1; // 10% tax
    const grandTotal = total + tax;

    return (
        <div className='cart'>
            <div className='cart-header'>
                <FaShoppingCart className='cart-icon' />
                <h2 className={cart.length > 0 ? 'blue' : 'red'}>
                    Order Summary
                </h2>
            </div>

            <div className='cart-message'>
                {cart.length === 0 ? (
                    <p className='empty-cart'>Please add some products</p>
                ) : (
                    <p className='items-count'>Items in cart: {cart.length}</p>
                )}
            </div>

            <div className='cart-items'>
                {cart.map(tshirt => (
                    <div key={tshirt._id} className='cart-item'>
                        <div className='item-info'>
                            <span className='item-name'>{tshirt.name}</span>
                            <span className='item-price'>${tshirt.price}</span>
                        </div>
                        <div className='item-details'>
                            <span className='item-gender'>{tshirt.gender}</span>
                            <span className='item-size'>{tshirt.size}</span>
                        </div>
                        <button 
                            className='delete-btn'
                            onClick={() => handleremovecart(tshirt._id)}
                            title="Remove item"
                        >
                            <RiDeleteBin5Fill />
                        </button>
                    </div>
                ))}
            </div>

            {cart.length > 0 && (
                <div className='cart-summary'>
                    <div className='summary-row'>
                        <span>Subtotal:</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                    <div className='summary-row'>
                        <span>Tax (10%):</span>
                        <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className='summary-row total'>
                        <span>Total:</span>
                        <span>${grandTotal.toFixed(2)}</span>
                    </div>
                    <button className='checkout-btn'>Proceed to Checkout</button>
                </div>
            )}
        </div>
    );
};

export default Cart;

