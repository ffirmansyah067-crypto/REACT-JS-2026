import React from 'react';

function StatusMessage({ status }) {
  let content; // variabel untuk menampung elemen yang akan ditampilkan

  // logika switch di luar JSX
  switch (status) {
    case "loading":
      content = <p>Sedang memuat data...</p>;
      break;
    case "success":
      content = <p>Data berhasil dimuat!</p>;
      break;
    case "error":
      content = <p>Terjadi kesalahan saat memuat data.</p>;
      break;
    default:
      content = <p>Status tidak diketahui.</p>;
      break;
  }

  return (
    <div>
      <h2>Contoh Switch Statement</h2>
      {content}
    </div>
  );
}

export default StatusMessage;
