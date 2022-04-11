import React, { useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user]=useAuthState(auth);
const[name,setName]=useState(' ')   
const [email,setEmail]=useState(' ')
const [address,setAddress]=useState(' ')
const [phone,setPhone]=useState(' ')
const [error,setError]=useState(' ')
// const navigate= useNavigate()

// const [createUserWithEmailAndPassword,user]=useCreateUserWithEmailAndPassword(auth)



const handleNameBlur=(e) => {
setName(e.target.value)
}

const handleAddressBlur=(e) => {
setAddress(e.target.value)
}
const handlePhoneNumberBlur=(e) => {
setPhone(e.target.value)
}


// if (user) {
//    navigate('/shop') 
// }
const handleCreateUser=(e) => {
    e.preventDefault();
    // if(password !==confirmPassword){
    //     setError('Your two passwords did not match!!')
    //     return;
    // }
    // // if (password.length<6) {
    // //     setError('Your password must be at least 6 characters or more')
    // //     return;
    // // }
    // createUserWithEmailAndPassword(email, password)
}

    return (
        <div className="form_container">
        <div>
            <h2 className="form_title">Shipping Info</h2>
            <form onSubmit={handleCreateUser} >
            <div className="input_group">
            <label htmlFor="email">Name</label>
            <input onBlur={handleNameBlur} type="text" name="text" id="" required/>
            </div>
            <div className="input_group">
            <label htmlFor="email">Email</label>
            <input value= {user?.email} type="email" name="email" id=""/>
            </div>
            <div className="input_group">
            <label htmlFor="password">Address</label>
            <input onBlur={handleAddressBlur} type="text" name="text" id="" required />
            </div>
            <div className="input_group">
            <label htmlFor="password">Phone Number</label>
            <input onBlur={handlePhoneNumberBlur} type="number" name="text" id="" required/>
            </div>
            <p style={{ color: 'red'}}>
                {error }
            </p>
            <div >
                <input className="form_submit" type="submit" value="Add shipping" />
            </div>
            </form>
            
           
        </div>
    </div>
    );
};

export default Shipment;