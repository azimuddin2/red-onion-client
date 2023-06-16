import React from 'react';
import logo from '../../../assets/images/logo.png';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer pt-5 pb-2'>
            <div className='container footer-main-part'>
                <div className='footer-first-part'>
                    <img className='logo' src={logo} alt="" />
                    <div className='footer-first-part-info'>
                        <p>
                            <MdLocationOn className='fs-5'></MdLocationOn>
                            <span> Level-4, 34, Awal Centre, Banani, Dhaka</span>
                        </p>
                        <p>
                            <FaEnvelope></FaEnvelope>
                            <span> Official: mohammadazimuddin274@gmail.com</span>
                        </p>
                        <p>
                            <FaPhone></FaPhone>
                            <span> Helpline : 01883061967</span>
                        </p>
                    </div>
                </div>
                <div className='footer-second-part'>
                    <h5 className='company'>Company</h5>
                    <ul>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Project</a></li>
                        <li><a href="/">Our Team</a></li>
                        <li><a href="/">Terms Conditions</a></li>
                        <li><a href="/">Web Development Privacy Policy</a></li>
                    </ul>
                </div>
                <div className='footer-third-part'>
                    <h5>About us</h5>
                    <p>Hello there. First, I will introduce myself. My name is Azim Uddin and I am a Full Stack web developer. I have 2+ years of experience in web programming.</p>
                    <div className='social-icon'>
                        {/* <img src={facebook} alt="facebook" />
                        <img src={linkedin} alt="linkedin" />
                        <img src={twitter} alt="twitter" />
                        <img src={instagram} alt="instagram" />
                        <img src={youtube} alt="youtube" /> */}
                    </div>
                </div>
            </div>
            <p className='copyright'><small>Copyright © 2023 Red Onion</small></p>

        </footer>
    );
};

export default Footer;