import React, { useState } from 'react';
import logo from '../../assets/bnb.svg'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

export const SignUp = (props) => {
    const { type } = props;
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ username: '', password: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleShowPassword = () => {
        setShowPassword((prevShow) => !prevShow);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3000/api/users', {
            username: e.target[0].value,
            password: e.target[1].value,
            role: 'admin'
        }).then((res) => {
            console.log(res.data)
            if (res.data) {
                toast.success('User  created successfully!');
            }
        });
    };

    return (
        <div className="glassmorphism-container"> {/* Apply glassmorphism styling */}
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-6 d-none d-lg-block">
                        <img src={logo} alt="Logo" className="logo img-fluid" />
                    </div>
                    <div className="col-lg-6 col-md-8 col-sm-10">
                        <h2 className="mb-4">{type} Register </h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    placeholder="Enter your username"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">
                                    Password
                                </label>
                                <div className="position-relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        className="form-control"
                                        id="password"
                                        placeholder="Enter your password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="btn btn-link position-absolute end-0 top-50 translate-middle-y"
                                        onClick={handleShowPassword}
                                    >
                                        {showPassword ? <i className='fa fa-eye-slash' /> : <i className='fa fa-eye' />}
                                    </button>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">
                                Register
                            </button>
                        </form>
                        <Link className='btn btn-outline-info text-dark mt-3' to={'/'}> Login </Link>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};
