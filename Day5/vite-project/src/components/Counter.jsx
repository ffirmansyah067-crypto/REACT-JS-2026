import React, { useState } from 'react';

function MyComponent() {
  // Deklarasi variabel state
  // `count` adalah variabel state saat ini
  // `setCount` adalah fungsi untuk memperbarui `count`
  // `0` adalah nilai awal untuk `count`
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Anda mengklik {count} kali</p>
      <button onClick={() => setCount(count + 1)}>
        Klik Disini
      </button>
    </div>
  );
}

export default MyComponent;