import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../tshirt/Tshirt';
import Cart from '../Cart/Cart';
import './Home.css';
import toast from 'react-hot-toast';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleaddtocart = tshirt => {
        const exist = cart.find(ts => ts._id === tshirt._id);
        if (exist) {
            toast('You have already added this t-shirt', {
                icon: '⚠️',
                duration: 2000
            });
        }
        const newCart = [...cart, tshirt];
        setCart(newCart);
        if (!exist) {
            toast.success('Item added to cart!', {
                icon: '🛍️',
                duration: 2000
            });
        }
    };

    const handleremovecart = id => {
        const remaining = cart.filter(ts => ts._id !== id);
        setCart(remaining);
        toast.success('Item removed from cart!', {
            icon: '🗑️',
            duration: 2000
        });
    };

    return (
        <div className='Home-container'>
            <div className='Tshirt-container'>
                {
                    tshirts.map(tshirt => (
                        <Tshirt 
                            key={tshirt._id} 
                            tshirt={tshirt} 
                            handleaddtocart={handleaddtocart}
                        />
                    ))
                }
            </div>
            <div className='cart-container'>
                <Cart 
                    cart={cart} 
                    handleremovecart={handleremovecart}
                />
            </div>
        </div>
    );
};

export default Home;