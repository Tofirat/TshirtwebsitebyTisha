import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../tshirt/Tshirt';
import Cart from '../Cart/Cart';
import './Home.css';
import toast from 'react-hot-toast';

const Home = () => {
    const tshirts=useLoaderData();
    // const[shirt,setShirts]=useState([]);
    // useEffect(()=>{
    //  fetch('generated.json').then(function(response){
            
    //     return response.json();
    //   })
    //   .then(function(myJson) {
       
    //   setShirts(myJson)
    //   }
    // ),[]})
  
    const [cart,setCart] =useState([]);
    const handleaddtocart=tshirt=>{
        const exist=cart.find(ts=>ts._id===tshirt._id)
        if(exist){
           toast('You have already added this t-shirt')
        } else{
        const newCart=[...cart,tshirt]
        setCart(newCart);
        }
    };

    const handleremovecart=id=>{
       const remaining=cart.filter(ts=>ts._id !==id)
       setCart(remaining);
    }
    return (
        <div className='Home-container'>
           <div className='Tshirt-container'>
           {
              tshirts.map(tshirt=><Tshirt key={tshirt._id} tshirt={tshirt} handleaddtocart={handleaddtocart}></Tshirt>)
            }
           </div>
           <div className='cart-container'>
             <Cart cart={cart} handleremovecart={handleremovecart}></Cart>
           </div>
        </div>
    );

};

export default Home;