import React from 'react';
import './Login.css';
import logo from '../../../assets/images/logo-dark.png';
import { Link } from 'react-router-dom';

const Login = () => {
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
                        <button className='form-btn' type="submit">Login</button>
                    </form>
                    <p className='link-text'>Don't have an account? <Link to='/signup' className='link'>Sign Up</Link></p>
                </div>
            </div>
        </section>
    );
};

export default Login;