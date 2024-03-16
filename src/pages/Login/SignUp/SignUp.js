import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../assets/images/logo-dark.png';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import useAuth from '../../../hooks/useAuth';

const SignUp = () => {
    const { createUser, updateUserProfile } = useAuth();
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                handleUpdateUserProfile(name, phone);
                form.reset();
                navigate(from, { replace: true });
                toast.success('User SignUp Successfully.');
            })
            .catch(error => {
                toast.error(error.message);
            })
    };

    const handleUpdateUserProfile = (name, phone) => {
        const profile = {
            displayName: name,
            phoneNumber: phone
        };

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => {
                toast.error(error.message)
            })
    };

    return (
        <section className='login-container'>
            <div>
                <Link to='/'>
                    <img src={logo} alt="logo" className='login-logo' />
                </Link>
                <div className='form-container'>
                    <form onSubmit={handleSubmit}>
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
                        <button className='form-btn' type="submit">Sign Up</button>
                    </form>
                    <p className='link-text'>Already have an account? <Link to='/login' className='link'>Login</Link></p>
                </div>
            </div>
        </section>
    );
};

export default SignUp;