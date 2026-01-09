import React, { useState } from 'react';

function UserProfile() {
  const [name, setName] = useState('Haiz');
  const [age, setAge] = useState(20);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h2>Profil Pengguna</h2>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
          />
          <button onClick={() => setIsEditing(false)}>Simpan</button>
        </div>
      ) : (
        <div>
          <p>Nama: {name}</p>
          <p>Usia: {age}</p>
          <button onClick={() => setIsEditing(true)}>Edit Profil</button>
        </div>
      )}
    </div>
  );
}

export default UserProfile;