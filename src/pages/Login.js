import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Login.css';

const Login = ({ login }) => {
    const formRef = useRef();
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        setLoggedIn(true);
        navigate('/');
    };

    const handleLogout = () => {
        setLoggedIn(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const data = Object.fromEntries(formData);
        const userInfo = {
            user: { email: data.email, password: data.password },
        };
        console.log(userInfo);
        handleLogin();
        e.target.reset();
    };

    return (
        <div className="wrapper">
            <div className="form-wrapper sign-in">
                <form onSubmit={handleSubmit} ref={formRef}>
                    <h2>Log In</h2>
                    <div className="input-group">
                        <label htmlFor="email">
                            Username
                        </label>
                        <input type="text" name="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">
                            Password
                        </label>
                        <input type="password" name="password" required />
                    </div>
                    <div className="remember">
                        <label htmlFor="remember">
                            <input type="checkbox" id="remember" /> Remember Me
                        </label>
                    </div>
                    <button type="submit">
                        Log In
                    </button>
                    <div className="signup-link">
                        <p>
                            Don't have an account yet? 
                            <a href="#" className="signup-link">
                                Sign Up
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
