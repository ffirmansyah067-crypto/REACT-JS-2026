import React, { useEffect, useState } from 'react';

function SimpleEffect() {
  const [count, setCount] = useState(0);

  // useEffect akan dijalankan setiap kali komponen render/update
  useEffect(() => {
    console.log('Komponen dirender atau di-update!');
  });

  return (
    <div>
      <h2>Contoh useEffect Sederhana</h2>
      <p>Nilai count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Tambah Count
      </button>
    </div>
  );
}

export default SimpleEffect;
