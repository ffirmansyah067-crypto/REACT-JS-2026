import React from 'react';
// Import CSS Module
import styles from './AlertBox.module.css'; 

const AlertBox = ({ message, variant = 'success' }) => {
  
  // 1. Definisikan kelas dasar yang selalu ada
  const baseClass = styles.alertBox;
  
  // 2. Definisikan kelas dinamis (berdasarkan prop 'variant')
  // Kita memastikan bahwa kelas varian yang diminta (success, warning, atau error)
  // ada di objek styles, jika tidak, kembali ke 'success' sebagai default.
  const dynamicClass = styles[variant] || styles.success;
  
  // 3. Gabungkan kelas dasar dan kelas dinamis
  // Menggunakan template literal untuk menggabungkan string kelas
  const finalClassNames = `${baseClass} ${dynamicClass}`;
  
  return (
    <div className={finalClassNames}>
      {message}
    </div>
  );
};

export default AlertBox;