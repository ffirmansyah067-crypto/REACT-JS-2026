import React from "react";
import { useUserContext } from "../context/UserContext"; // ⬅️ ganti import

const UserProfile = () => {
  const { user, login, logout, updateProfile } = useUserContext(); // ⬅️ ganti hook

  return (
    <div>
      <h2>Informasi Pengguna</h2>
      {user.isLoggedIn ? (
        <>
          <p>Nama: {user.name}</p>
          <p>Email: {user.email}</p>
          <button onClick={() => updateProfile({ name: "Firmansyah Update" })}>
            Update Nama
          </button>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <p>Belum login</p>
          <button onClick={() => login("Firmansyah", "firmansyah@email.com")}>
            Login
          </button>
        </>
      )}
    </div>
  );
};

export default UserProfile;
