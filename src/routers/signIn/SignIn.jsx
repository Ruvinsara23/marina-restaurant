import React from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase.utils';

    


const SignIn = () => {

    const logGoogleUser=async()=>{
     const { user } = await signInWithGooglePopup();
     const userDocref= await createUserDocumentFromAuth(user);
    }

  return (
    <div>
      <h1>This is SignIn</h1>
      <button onClick={logGoogleUser}>
      SIgn In with Google
      </button>
    </div>
  )
}

export default SignIn
