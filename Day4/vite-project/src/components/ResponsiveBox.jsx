import React from 'react';
// Import CSS Module
import styles from './ResponsiveBox.module.css'; 

const ResponsiveBox = () => {
  return (
    <div className={styles.box}>
      <p className={styles.text}>
        Ukuran kotak, padding, dan warnanya akan berubah otomatis berdasarkan lebar layar.
      </p>
      <p>
        Resize jendela browser Anda untuk melihat perubahannya!
      </p>
    </div>
  );
};

export default ResponsiveBox;