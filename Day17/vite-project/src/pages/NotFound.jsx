import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <img 
        src="https://copilot.microsoft.com/th/id/BCO.53eb04c5-7fd2-4cf4-b653-a0cec9286dcb.png" 
        alt="404 Illustration" 
        style={{ width: "300px", marginBottom: "20px" }}
      />
      <h1>404 - Page Not Found</h1>
      <p>Oops! Halaman yang kamu cari tidak tersedia.</p>
      <Link to="/">
        <button>⬅ Kembali ke Halaman Utama</button>
      </Link>
    </div>
  );
};

export default NotFound;
