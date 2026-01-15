import React, { useState, useEffect } from "react";

function FakeFetch() {
  const [data, setData] = useState(null);     // state untuk data
  const [loading, setLoading] = useState(true); // state untuk loading
  const [error, setError] = useState(null);     // state untuk error

  useEffect(() => {
  const timer = setTimeout(() => {
    try {
      const fakeData = {
        name: "Firmansyah",
        email: "firmanjagoanneon@example.com",
        hobby: "Menjaga Bumi Tetap Aman"
      };
      setData(fakeData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, 2000);

  return () => clearTimeout(timer);
}, []);


  // kondisi render
  if (loading) return <p>Sedang memuat data...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Data Pengguna</h2>
      <p>Nama: {data.name}</p>
      <p>Email: {data.email}</p>
      <p>Hobi: {data.hobby}</p>
    </div>
  );
}

export default FakeFetch;
