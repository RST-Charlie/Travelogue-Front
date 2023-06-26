import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/LogIn.css';
import "animate.css";


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
        <>
        <div><p className="login-banner animate__animated animate__fadeInLeft">See you adventures</p></div>
            <div id="login" className="login-container animate__animated animate__slideInUp">
                <h1>Sign In</h1>
                {!loggedIn ? (
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <label>
                            Email:
                            <input type="email" name="email" placeholder="Email" />
                        </label>
                        <label>
                            Password:
                            <input type="password" name="password" placeholder="Password" />
                        </label>
                        <input type="submit" value="Login" className="submit-button" />
                    </form>
                ) : (
                    <div>
                        <p>You are logged in!</p>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                )}
                <br />
                <div className="login-link">
                    Not registered yet, <a href="/signup">Sign Up.</a>
                </div>
            </div>
        </>
    );
};

export default Login;



