import React from 'react';
import Chart from '../Chart/Chart';
import { useLoaderData } from 'react-router-dom';
import { FaTshirt, FaShippingFast, FaSmile } from 'react-icons/fa';
import './About.css';

const About = () => {
    const data = useLoaderData();
   
    return (
        <div className="about-container">
            <div className="about-header">
                <h1>Welcome to Sakin Styles</h1>
                <p>Where Fashion Meets Comfort</p>
            </div>

            <div className="about-content">
                <div className="about-story">
                    <h2>Our Story</h2>
                    <p>Founded in 2025 by Tisha , Sakin Styles has been dedicated to providing high-quality, stylish t-shirts that make you feel confident and comfortable. Our passion for fashion and commitment to customer satisfaction drives everything we do.</p>
                </div>

                <div className="features-grid">
                    <div className="feature-card">
                        <FaTshirt className="feature-icon" />
                        <h3>Quality Materials</h3>
                        <p>Premium cotton blend fabrics for ultimate comfort</p>
                    </div>
                    <div className="feature-card">
                        <FaShippingFast className="feature-icon" />
                        <h3>Fast Delivery</h3>
                        <p>Quick and reliable shipping nationwide</p>
                    </div>
                    <div className="feature-card">
                        <FaSmile className="feature-icon" />
                        <h3>Customer First</h3>
                        <p>100% satisfaction guaranteed</p>
                    </div>
                </div>

                <div className="stats-section">
                    <h2>Our Growth</h2>
                    <Chart data={data} />
                </div>
            </div>
        </div>
    );
};

export default About;