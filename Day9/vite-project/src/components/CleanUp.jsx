import React, { useState, useEffect } from "react";

function WindowSizeTracker() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // fungsi handler untuk update ukuran
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // pasang event listener
    window.addEventListener("resize", handleResize);

    // cleanup function: hapus event listener saat komponen unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // dependency array kosong → hanya pasang sekali

  return (
    <div>
      <h2>Ukuran Jendela Browser</h2>
      <p>Lebar: {size.width}px</p>
      <p>Tinggi: {size.height}px</p>
    </div>
  );
}

export default WindowSizeTracker;
