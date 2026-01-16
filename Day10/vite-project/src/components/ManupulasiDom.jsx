import React, { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => setUsers(data))
      .catch((err) => setError(err.message));
  }, []);

  // Manipulasi data:
  // 1. Ambil hanya 5 user pertama → slice
  // 2. Filter hanya user dengan email yang mengandung ".org"
  // 3. Map untuk menampilkan nama + email saja
  const filteredUsers = users
    .slice(0, 5)
    .filter((user) => user.email.includes(".org"))
    .map((user) => ({
      name: user.name,
      email: user.email,
    }));

  if (error) return <p>Error: {error}</p>;
  if (!users.length) return <p>Loading...</p>;

  return (
    <div>
      <h2>Daftar User (Nama & Email)</h2>
      <ul>
        {filteredUsers.map((user, index) => (
          <li key={index}>
            <strong>{user.name}</strong> — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
