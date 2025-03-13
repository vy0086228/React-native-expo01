import React, { useState } from "react";
import'./LoginForm.css';
import { FaUser, FaLock, } from "react-icons/fa"; 

const LoginForm = () => {

    const [action, setAction] = useState('');

    const registerLink = () => {
        setAction(' active');
    };

    return (
        <div className={`wrapper${action}`}>
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required />
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                    <FaLock className="icon" />
                </div>
                <div className="remember-forgot">
                    <lebal><input type="checkbox" />Remember me</lebal>
                    <a href="#">Forgot password?</a>
                </div>
                <button type="submit">Login</button>

                <div className="register-link">
                    <p>Don't have an account? <a href="#" onClick={registerLink}>Register</a></p>
                </div>
            </form>
        </div>
    )            
};

export default LoginForm;