import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SignUp.css";
import "animate.css";

const SignUp = ({ signup }) => {
    const formRef = useRef();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const data = Object.fromEntries(formData);
        const userInfo = {
            "user":{ email: data.email, password: data.password },
        };

        signup(userInfo);
        navigate("/");
        formRef.current.reset(); 
    };

    return (
        <>
            <div 
                className="
                    signup-statement 
                    animate__animated 
                    animate__fadeInLeft"
            >
                <p className="signup-title">
                    Start logging with us
                </p>
                <p className="banner">
                    Embark on new adventures
                </p>
            </div>
            <div 
                className="animate__animated animate__slideInUp signup" 
                data-testid="signup-component"
            >
                <form 
                    ref={formRef} 
                    onSubmit={handleSubmit}
                    className="form__signup"
                >
                    <label>
                        Email:
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email" 
                        />
                    </label>
                    <label>
                        Password:
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Password" 
                        />
                    </label>
                    <label>
                        Confirm Password:
                        <input 
                            type="password" 
                            name="password_confirmation" 
                            placeholder="Confirm Password" 
                        />
                    </label>
                    <br />
                    <input 
                        type="submit" 
                        value="Submit" 
                        className="submit-signup" 
                    />
                </form>
                <br />
                <div className="login-link">
                    Already registered? 
                    <a href="/login">
                        Login
                    </a> 
                    here.
                </div>
            </div>
            <br />
        </>
    );
};

export default SignUp;


