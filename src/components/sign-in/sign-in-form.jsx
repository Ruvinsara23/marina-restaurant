import React from 'react'
import { useState ,useContext} from 'react';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
 
} from '../../utils/firebase.utils';
import './sign-in-form.style.scss'
import google from '../../assets/google.png'
import { UserContext } from '../../contexts/user.context';



const defaultFormFields={
    email:'',
    password:'',

}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { setCurrentUser }=useContext(UserContext)

  
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };



  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const {user}= await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();
      console.log(user)
      console.log(setCurrentUser)
     
    
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
      }
    }
  };

  const signInWithGoogle = async () => {
    const {user}= await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-in-container'>
    <h2>Already have an account </h2>
    <span>Sign In with your email and password</span>
    <form onSubmit={handleSubmit}>
    <label>Email</label>
    <input type='email'  name='email' required onChange={handleChange}  />

    <label>Password</label>
    <input type='password' value={password} required onChange={handleChange} name='password' />
    <div className='button-container'>
    <button className='sign-up' type='submit'>Sign In</button>
    <button className="google-signin-button" onClick={signInWithGoogle}>
    <img src={google} alt="Google" className="google-logo" />
    Sign In with Google
  </button>
  </div>
    </form>
    </div>
  )
}

export default SignInForm;

