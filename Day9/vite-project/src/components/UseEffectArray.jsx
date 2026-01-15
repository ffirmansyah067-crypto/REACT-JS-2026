import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   const fetchUserData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]); // Effect akan dijalankan ulang setiap kali userId berubah

  if (loading) return <p>Memuat data pengguna...</p>;
  if (!user) return <p>Pengguna tidak ditemukan.</p>;

  return (
    <div>
      <h2>Profil Orang Keren</h2>
      <p>Nama: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

function App() {
  const [currentUserId, setCurrentUserId] = useState(1);

  return (
    <div>
      <h1>Aplikasi Profil Pengguna</h1>
      <UserProfile userId={currentUserId} />
      <button onClick={() => setCurrentUserId(prevId => prevId + 1)}>
        Lihat Pengguna Berikutnya
      </button>
    </div>
  );
}

export default App;