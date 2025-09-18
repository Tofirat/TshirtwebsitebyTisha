import React from 'react';
import './tshirt.css';
import { FaShoppingCart } from 'react-icons/fa';

const Tshirt = ({tshirt, handleaddtocart}) => {
   const {picture, name, price, gender, size} = tshirt;
    return (
        <div className="tshirt-card">
            <div className="image-container">
                <img
                    src={picture} 
                    alt={`${name} t-shirt`}
                    onError={(e) => {
                        e.target.src = "https://img01.ztat.net/article/spp-media-p1/c5fdf06bd01048ec8024b831b4f2bea9/8d29d6427fdb4cbd9b6ef6ffd1a7ea0f.jpg?imwidth=762&filter=packshot"
                    }}
                />
            </div>
            <div className="tshirt-details">
                <h3 className="tshirt-name">{name}</h3>
                <div className="tshirt-info">
                    <span className="tshirt-gender">{gender}</span>
                    <span className="tshirt-size">{size}</span>
                </div>
                <div className="price-section">
                    <span className="price">${price}</span>
                    <button 
                        className="buy-button" 
                        onClick={() => handleaddtocart(tshirt)}
                    >
                        <FaShoppingCart className="cart-icon" />
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Tshirt;