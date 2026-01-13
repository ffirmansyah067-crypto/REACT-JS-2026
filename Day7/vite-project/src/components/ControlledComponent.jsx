import React, { useState } from 'react';

function NameForm() {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value); // Memperbarui state setiap kali input berubah
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Mencegah refresh halaman
    alert('Nama yang disubmit: ' + name);
    setName(''); // Mengosongkan input setelah submit
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Controlled Component</h2>
      <label>
        Nama:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <p>Sedang Mengetik 😹: {name}</p>
      <button type="submit">Submit</button>
    </form>
  );
}

export default NameForm;