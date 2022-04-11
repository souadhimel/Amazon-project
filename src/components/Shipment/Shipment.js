import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
 const [user]=useAuthState(auth);
const[name,setName]=useState(' ')   
const [address,setAddress]=useState(' ')
const [phone,setPhone]=useState(' ')




const handleNameBlur=(e) => {
setName(e.target.value)
}

const handleAddressBlur=(e) => {
setAddress(e.target.value)
}
const handlePhoneNumberBlur=(e) => {
setPhone(e.target.value)
}

const handleCreateUser=(e) => {
    e.preventDefault();
    const shipping={name,address,phone};
    console.log(shipping);
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
            <div >
                <input className="form_submit" type="submit" value="Add shipping" />
            </div>
            </form>
            
           
        </div>
    </div>
    );
};

export default Shipment;