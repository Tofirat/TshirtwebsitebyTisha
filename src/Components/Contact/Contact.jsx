import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-header">
                <h1>Get in Touch</h1>
                <p>We'd love to hear from you</p>
            </div>

            <div className="contact-content">
                <div className="contact-info">
                    <h2>Contact Information</h2>
                    <div className="info-items">
                        <div className="info-item">
                            <FaPhone className="info-icon" />
                            <p>+880 1234-567890</p>
                        </div>
                        <div className="info-item">
                            <FaEnvelope className="info-icon" />
                            <p>contact@sakinstyles.com</p>
                        </div>
                        <div className="info-item">
                            <FaMapMarkerAlt className="info-icon" />
                            <p>123 Fashion Street, Dhaka, Bangladesh</p>
                        </div>
                    </div>
                    <div className="social-links">
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaInstagram /></a>
                    </div>
                </div>

                <form className="contact-form">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" placeholder="Your Name" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="Your Email" />
                    </div>
                    <div className="form-group">
                        <label>Subject</label>
                        <input type="text" placeholder="Subject" />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea placeholder="Your Message" rows="5"></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;