import React, { useState, useEffect } from "react";

function MultipleEffects() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // useEffect pertama: update document title saat count berubah
  useEffect(() => {
    document.title = `Count: ${count}`;
    console.log("Document title diperbarui:", document.title);
  }, [count]); // hanya jalan ulang kalau count berubah

  // useEffect kedua: log ke konsol saat name berubah
  useEffect(() => {
    if (name) {
      console.log(`Name berubah menjadi: ${name}`);
    }
  }, [name]); // hanya jalan ulang kalau name berubah

  return (
    <div>
      <h2>Contoh Multiple useEffect</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah Count</button>

      <br /><br />

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Masukkan nama..."
      />
    </div>
  );
}

export default MultipleEffects;
