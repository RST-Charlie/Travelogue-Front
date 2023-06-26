import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
        <div id="login">
            <h1>Sign In</h1>
            {!loggedIn ? (
                <form ref={formRef} onSubmit={handleSubmit}>
                    Email: <input type="email" name="email" placeholder="email" />
                    <br />
                    Password: <input type="password" name="password" placeholder="password" />
                    <br />
                    <input type="submit" value="Login" />
                </form>
            ) : (
                <div>
                    <p>You are logged in!</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            )}
            <br />
            <div>
                Not registered yet, <a href="/signup">Signup</a>
            </div>
        </div>
    );
};

export default Login;
