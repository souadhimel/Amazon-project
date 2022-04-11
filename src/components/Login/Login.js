import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return (
        <div className="form_container">
            <div>
                <h2 className="form_title">Login</h2>
                <form >
                <div className="input_group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="" required />
                </div>
                <div className="input_group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id=""  required/>
                </div>
                <div >
                    <input className="form_submit" type="submit" value="Login" />
                </div>
                <div className="form_text">
                <p>New to Ema-John? <Link className="form_link" to="/signup">Create a new account</Link></p></div>
                <div className="divider">
            <div className="divider_line"></div><p>or</p>
            <div className="divider_line"></div>
            </div>
                <div >
                    <button className="form_submit_google" ><FcGoogle></FcGoogle>  Continue with Google</button>
                   
                </div>
                </form>
            </div>
        </div>
    );
};

export default Login;