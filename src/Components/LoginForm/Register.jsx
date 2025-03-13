import React, { useState } from "react";
import'./Register.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa"; 

const Register= () => {

    const [action, setAction] = useState('');

    const loginLink = () => {
        setAction(' ');
    };
    return (
        <div className={`wrapper${action}`}>
            <div className="form-box register">
                <form action="">
                    <h1>Registration</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required />
                        <FaUser className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="email" placeholder="Email" required />
                        <FaEnvelope className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required />
                        <FaLock className="icon" />
                    </div>
                    <div className="remember-forgot">
                        <lebal><input type="checkbox" />I agree to the terms & conditions</lebal>
                
                    </div>
                    <button type="submit">Register</button>
    
                    <div className="register-link">
                        <p>Alreddy have an account? <a href="#" onClick={loginLink}>Login</a></p>
                    </div>
                </form>
            </div>
        </div>
    )
    
};

export default Register;