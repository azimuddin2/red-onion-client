import React from 'react';
import logo from '../../../assets/images/logo.png';
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import './Footer.css';
import ScrollToTop from 'react-scroll-to-top';

const Footer = () => {
    return (
        <footer className='footer pt-5 pb-2'>
            <div className='container footer-main-part'>
                <div className='footer-first-part'>
                    <img className='logo' src={logo} alt="" />
                    <div className='footer-first-part-info'>
                        <p>
                            <MdLocationOn className='fs-5'></MdLocationOn>
                            <span>Level-4, 34, Awal Centre, Banani, Dhaka</span>
                        </p>
                        <p>
                            <FaEnvelope></FaEnvelope>
                            <span>mohammadazimuddin274@gmail.com</span>
                        </p>
                        <p>
                            <FaPhone></FaPhone>
                            <span>Helpline : 01883061967</span>
                        </p>
                    </div>
                </div>
                <div className='footer-second-part'>
                    <h5 className='company'>Company</h5>
                    <ul>
                        <li><a href="/">About Online Food</a></li>
                        <li><a href="/">Sign up to Deliver</a></li>
                        <li><a href="/">Our Team</a></li>
                        <li><a href="/">Terms Conditions</a></li>
                        <li><a href="/">Web Development Privacy Policy</a></li>
                    </ul>
                </div>
                <div className='footer-third-part'>
                    <h5>About us</h5>
                    <p>Hello there. First, I will introduce myself. My name is Azim Uddin and I am a Full Stack web developer. I have 2+ years of experience in web programming.</p>
                    <div className='social-icon'>
                        <FaFacebook className='icon'></FaFacebook>
                        <FaLinkedin className='icon'></FaLinkedin>
                        <FaInstagram className='icon'></FaInstagram>
                        <FaTwitter className='icon'></FaTwitter>
                    </div>
                </div>
            </div>
            <p className='copyright'><small>Copyright © 2024 Red Onion</small></p>
            <ScrollToTop
                className='d-flex align-items-center justify-content-center'
                smooth
                color='#fff'
                width='16'
                height='16'
                top='400'
                style={{ backgroundColor: '#f91944', padding: '10px', boxShadow: 'none' }}
            ></ScrollToTop>
        </footer>
    );
};

export default Footer;