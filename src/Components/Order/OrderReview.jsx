import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useLoaderData } from 'react-router-dom';
import './OrderReview.css';

const OrderReview = () => {
    const rawData = useLoaderData();
    
    
    const data = Array.isArray(rawData) ? rawData : [];
    console.log(data)

    return (
        <div className="review-container">
            <div className="review-header">
                <h1>Business Analytics</h1>
                <p>Our Growth and Performance</p>
            </div>
            <div className="stats-section">
                <h2>Sales Growth</h2>
                {data.length > 0 ? (
                    <LineChart width={800} height={400} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line 
                            type="monotone" 
                            dataKey="sales" 
                            stroke="#8884d8" 
                            activeDot={{ r: 8 }} 
                        />
                    </LineChart>
                ) : (
                    <p>No data available</p>
                )}
            </div>
        </div>
    );
};

export default OrderReview;