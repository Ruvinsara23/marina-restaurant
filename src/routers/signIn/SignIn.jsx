import React from 'react'
import SignUpForm from '../../components/sign-up/sign-up-form';
import SignInForm from '../../components/sign-in/sign-in-form';
import './SignIn.scss'

    


const SignIn = () => {
  return (
    <div className='form-container'>
        <SignInForm />
        <SignUpForm />
        
    </div>
  )
}

export default SignIn
