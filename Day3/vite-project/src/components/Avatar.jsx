// Avatar.jsx
import React from 'react';

function Avatar({ user }) {
  return (
    <img
      className="Avatar"
      src={user.avatarUrl}
      alt={user.name}
      style={{ width: '50px', height: '50px', borderRadius: '50%' }}
    />
  );
}

export default Avatar;