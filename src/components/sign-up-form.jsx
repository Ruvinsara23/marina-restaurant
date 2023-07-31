import React from 'react'
import { useState ,useContext} from 'react';
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
  }from '../utils/firebase.utils';
import './sign-up-form.style.scss'
import google from '../assets/google.png'
import { UserContext } from '../contexts/user.context';


const defaultFormFields={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:'',
}

const SignUpForm = () => {


    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    const { setCurrentUser } = useContext(UserContext);
  
    const resetFormFields = () => {
      setFormFields(defaultFormFields);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (password !== confirmPassword) {
        alert("passwords do not match");
        return;
      }
  
      try {
        const { user } = await createAuthUserWithEmailAndPassword(
          email,
          password
        );
  
        await createUserDocumentFromAuth(user, { displayName });
        resetFormFields();
        setCurrentUser(user);
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          alert("Cannot create user, email already in use");
        } else {
          console.log("user creation encountered an error", error);
        }
      }
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormFields({ ...formFields, [name]: value });
    };
  
    
  return (
    <div className='sign-up-container'>
    <h2>Don't have an account </h2>
    <span>Sign Up with your email and password</span>
    <form onSubmit={handleSubmit}>
    <label>DisplayName</label>
    <input type='text' required onChange={handleChange} name='displayName' value={displayName}  />

    <label>Email</label>
    <input type='email'  name='email' required onChange={handleChange}  />

    <label>Password</label>
    <input type='password' value={password} required onChange={handleChange} name='password' />

    <label>Confirm Password</label>
    <input type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword}  />
    <div className='button-container'>
        <button className='sign-up' type='submit'>Sign Up</button>
      </div>
    </form>
    </div>
  )
}

export default SignUpForm;

