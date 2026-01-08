import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, variant = 'default', onClick }) => {
  // CSS Modules secara otomatis membuat nama kelas unik
  // Contoh: 'default' akan menjadi sesuatu seperti 'Button_default__a1b2c'
  
  // Kita memilih kelas berdasarkan prop 'variant'
  const buttonClass = styles[variant] || styles.default;
  
  return (
    // Menerapkan nama kelas yang dipetakan dari objek 'styles'
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;