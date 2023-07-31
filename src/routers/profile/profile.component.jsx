import React from 'react'
import { useState } from 'react';
import './profile.styles.scss'
import InputMask from 'react-input-mask';



const defaultFormFields={
    displayName:'',
    email:'',
   address:'',
   phoneNumber:'',
}



const Profile = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email,phoneNumber, address } = formFields;

    const [value, setValue] = useState()
    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormFields({ ...formFields, [name]: value })
      };
 
  return (
    <div>
      <h1>This is profile</h1>
      <div className='sign-up-container'>
      <h2>Don't have an account </h2>
      <span>Sign Up with your email and password</span>
      <form onSubmit>
      <label>DisplayName</label>
      <input type='text' required onChange={handleChange} name='displayName' value={displayName}  />
  
      <label>Email</label>
      <input type='email'  name='email' required onChange={handleChange} value={email} />
  
      <label>Address</label>
      <input type='password' value={address} required onChange={handleChange} name='address' />
  
      <label>Phone Number</label>
      <InputMask
      mask="0999999999"
      maskChar="_"
      placeholder="Enter your phone number"
    />
      <div className='button-container'>
          <button className='sign-up' type='submit'>Update</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Profile
