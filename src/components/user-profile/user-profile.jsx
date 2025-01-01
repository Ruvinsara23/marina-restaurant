import React, { useState, useEffect } from "react";
import "./user-profile.scss";
import { UserContext } from "../../contexts/user.context";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { updateUserProfileDetails } from "../../utils/firebase.utils";
import { useContext } from "react";
const defaultFormFields = {
    
  displayName: "",
  email: "",
  address: "",
  phoneNumber: "",
};

const UserProfile = () => {
  const { currentUser } =  useContext(UserContext);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (currentUser) {
      const { displayName, email, address, phoneNumber } = currentUser;
      setFormFields({ displayName, email, address, phoneNumber });
    } else {
      console.error("No current user found");
    }
  }, [currentUser]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleImageChange = (event) => {
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (image) {
        const storage = getStorage();
        const storageRef = ref(storage, `images/${image.name}`);
        await uploadBytes(storageRef, image);
        const imageUrl = await getDownloadURL(storageRef);
        await updateUserProfileDetails({ ...formFields, imageUrl });
      } else {
        await updateUserProfileDetails(formFields);
      }
      alert("Profile updated successfully");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="displayName"
          value={formFields.displayName}
          onChange={handleChange}
          placeholder="Display Name"
        />
        <input
          type="email"
          name="email"
          value={formFields.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="text"
          name="address"
          value={formFields.address}
          onChange={handleChange}
          placeholder="Address"
        />
        <input
          type="text"
          name="phoneNumber"
          value={formFields.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
        />
        <input type="file" onChange={handleImageChange} />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default UserProfile;