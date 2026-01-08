import React from 'react';
import './ProfileBox.css';

const ProfileBox = ({ name, role, title }) => {
  return (
    // Menerapkan kelas CSS 'profile-container'
    <div className="profile-container">
      
      {/* Menerapkan kelas CSS pertama: 'profile-header' */}
      <h2 className="profile-header">
        {name}
      </h2>

      {/* Menerapkan kelas CSS kedua: 'profile-body' */}
      <p className="profile-body">
        {role}
      </p>

      <p className="profile-body">
        {title}
      </p>

    </div>
  );
};

export default ProfileBox;