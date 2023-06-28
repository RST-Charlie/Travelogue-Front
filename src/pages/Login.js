import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mockData from '../mockUsers'

const Login = ({ login }) => {
    const formRef = useRef();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const data = Object.fromEntries(formData);
        const userInfo = {
            "user":{ email: data.email, password: data.password },
        };
        console.log("log in page user info:", userInfo);
        login(userInfo);
        navigate('/')
        e.target.reset();
    };

    return (
        <div id="login">
            <h1>Log In</h1>
            <form ref={formRef} onSubmit={handleSubmit}>
                Email: <input type="email" name="email" placeholder="email" />
                <br />
                Password: <input type="password" name="password" placeholder="password" />
                <br />
                <input type="submit" value="Login" />
            </form>
            <div>
                Not registered yet, <a href="/signup">Signup</a>
            </div>
        </div>
    );
};

export default Login;