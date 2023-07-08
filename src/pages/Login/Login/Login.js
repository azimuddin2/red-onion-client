import React, { useState } from 'react';
import './Login.css';
import logo from '../../../assets/images/logo-dark.png';
import { Link } from 'react-router-dom';
import { FaEyeSlash, FaEye } from 'react-icons/fa';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
    };

    return (
        <section className='login-container'>
            <div>
                <Link to='/'>
                    <img src={logo} alt="" className='login-logo' />
                </Link>
                <div className='form-container'>
                    <form onSubmit={handleSubmit}>
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
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder='Password'
                                className='input-field'
                                required
                            />
                            <p
                                onClick={() => setShowPassword(!showPassword)}
                                className='show-password'
                            >
                                {
                                    showPassword ?
                                        <FaEyeSlash></FaEyeSlash>
                                        :
                                        <FaEye></FaEye>
                                }
                            </p>
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