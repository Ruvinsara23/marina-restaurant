import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./profileSection.scss";
import UserDetails from "../user-details/user-details";
import UserProfile from "../user-profile/user-profile";

const UserProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="user-profile-page">
    {isEditing ? (
      <div className="card">
        <div className="card-header">
          <h2>Edit Your Profile</h2>
          <p>You can update your profile.</p>
        </div>
        <div className="card-content">
          <UserProfile onSave={handleSave} />
        </div>
      </div>
    ) : (
      <div className="card">
        <div className="card-header">
          <h2>User Profile</h2>
          <button onClick={handleEdit} className="btn-edit">Edit</button>
        </div>
        <div className="card-content">
          <UserDetails />
        </div>
      </div>
    )}
  </div>
  );
};

export default UserProfilePage;
