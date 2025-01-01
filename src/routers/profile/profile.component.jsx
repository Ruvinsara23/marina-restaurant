import React from 'react'
import { useState,useEffect } from 'react';
import './profile.styles.scss'
import InputMask from 'react-input-mask';
 import { db } from '../../utils/firebase.utils';
 import { getDocs,collection,updateDoc,doc } from 'firebase/firestore';
 import { UserContext } from '../../contexts/user.context';
 import { useContext } from 'react';
import OrderHistoryComponent from '../../components/order-history/order-history';

const defaultFormFields={
    displayName:'',
    email:'',
    address:'',
    phoneNumber:'',
}



const Profile = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email,phoneNumber, address } = formFields;
    const {currentUser, setCurrentUser }=useContext( UserContext);

    const [filteredUser, setFilteredUser] = useState();
    
   const userDataCollection=collection(db,"users")


useEffect(()=>{
    const getDataList=async()=>{
       try{
        const data= await getDocs(userDataCollection)
        const firestoreData = data.docs.map((doc)=>({...doc.data(),id:doc.id}))
        console.log("This is data from fire store id",firestoreData)
        
        const userWithId = Object.values(firestoreData).filter(
            (user) => user.id === currentUser.uid
            
          );

          console.log("This user data id",userWithId)
          setFilteredUser(userWithId[0])
       }catch(err){
         console.error(err);
       }

         
    }
   
    getDataList();

 
   
},[currentUser])

const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const userDocRef = doc(userDataCollection, currentUser.uid);
      await updateDoc(userDocRef, {
        displayName,
        email,
        address,
        phoneNumber,
      });

      console.log("Data updated successfully!");
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };


console.log("This user duser",filteredUser)



    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormFields({ ...formFields, [name]: value })
      };
 
  return (
    <div className='profle-order-container' >
    <div className="profile-container">
    <h1 className="profile-title">Your Profile</h1>
    <form onSubmit={handleSubmit} className="profile-form">
      <label>Display Name</label>
      <input
        type="text"
        value={displayName}
        required
        onChange={handleChange}
        name="displayName"
        placeholder={filteredUser?.displayName || 'Enter your name'}
      />

      <label>Email</label>
      <input
        type="email"
        name="email"
        required
        onChange={handleChange}
        value={email}
        placeholder={filteredUser?.email || 'Enter your email'}
      />

      <label>Address</label>
      <input
        type="text"
        value={address}
        required
        onChange={handleChange}
        name="address"
        placeholder={filteredUser?.address || 'Enter your address'}
      />

      <label>Phone Number</label>
      <input
        type="tel"
        name="phoneNumber"
        required
        onChange={handleChange}
        value={phoneNumber}
        placeholder={filteredUser?.phoneNumber || 'Enter your phone number'}
      />

      <button type="submit" className="update-button">
        Update Profile
      </button>
    </form>
    </div>
    <div>
    
    </div>
    <OrderHistoryComponent />
  </div>
  )
}

export default Profile