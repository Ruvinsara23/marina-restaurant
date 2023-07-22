
import firebase from 'firebase/app'
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import {getFirestore ,doc ,getDoc , setDoc} from 
'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyBWa3fhXO_lspvcoKtnJoKdpokYLugiK5E",
    authDomain: "marina-restaurant.firebaseapp.com",
    projectId: "marina-restaurant",
    storageBucket: "marina-restaurant.appspot.com",
    messagingSenderId: "1074575150632",
    appId: "1:1074575150632:web:6af2e3f1673b7a6e576f1d",
    measurementId: "G-8GSJR1W8YP"
  };

  const firebaseApp= initializeApp(firebaseConfig);

  const provider=new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });


  export const auth=getAuth();
  export const signInWithGooglePopup=()=>signInWithPopup(auth, provider)


  export const db =getFirestore();

  export const createUserDocumentFromAuth= async (userAuth)=>{
    const userDocref = doc(db ,'users', userAuth.uid);

    console.log(userDocref);


    const userSnapshot = await getDoc(userDocref);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());


    if (!userSnapshot.exists()){
        const { displayName ,email}=userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocref,{
                displayName,
                email,
                createdAt
            });
        }catch(error){
         console.log('error creating the user');
        }
    }
  }