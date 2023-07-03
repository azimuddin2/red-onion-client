import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo-dark.png';

const SignUp = () => {
    return (
        <section className='login-container'>
            <div>
                <Link to='/'>
                    <img src={logo} alt="" className='login-logo' />
                </Link>
                <div className='form-container'>
                    <form>
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder='Name'
                                className='input-field'
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="phone"
                                placeholder='Phone'
                                className='input-field'
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder='Email'
                                className='input-field'
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                name="password"
                                placeholder='Password'
                                className='input-field'
                                required
                            />
                        </div>
                        <button className='form-btn' type="submit">Sign Up</button>
                    </form>
                    <p className='link-text'>Already have an account? <Link to='/login' className='link'>Login</Link></p>
                </div>
            </div>
        </section>
    );
};

export default SignUp;