import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [email,setEmail]=useState(" ")
    const [password,setPassword]=useState(" ")
    const navigate = useNavigate()
    const location=useLocation()
    const  from = location.state?.from?.pathname || "/";
   

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const handleEmailBlur=(e) => {
        setEmail(e.target.value)
    }
    const handlePasswordBlur=(e) => {
        setPassword(e.target.value)
    }

    if (user) {
        navigate(from,{replace:true})
    }

    const handleUserSignIn=(e) => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className="form_container">
            <div>
                <h2 className="form_title">Login</h2>
                <form onSubmit={handleUserSignIn} >
                <div className="input_group">
                <label htmlFor="email">Email</label>
                <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                </div>
                <div className="input_group">
                <label htmlFor="password">Password</label>
                <input onBlur={handlePasswordBlur} type="password" name="password" id=""  required/>
                </div>
                <p style={{ color :"red" }}>{error?.message}</p>
                <div >
                    <input className="form_submit" type="submit" value="Login" />
                </div>
                </form>
                <div className="form_text">
                <p>New to Ema-John? <Link className="form_link" to="/signup">Create a new account</Link></p></div>
                <div className="divider">
            <div className="divider_line"></div><p>or</p>
            <div className="divider_line"></div>
            </div>
                <div >
                    <button className="form_submit_google" ><FcGoogle></FcGoogle>  Continue with Google</button>
                   
                </div>
                
            </div>
        </div>
    );
};

export default Login;