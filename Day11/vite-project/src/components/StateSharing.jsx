import React, { useState } from "react";
import ReactDOM from "react-dom/client";

// Komponen saudara pertama: bisa mengubah state
function SiblingA({ value, onChange }) {
  return (
    <div style={{ marginBottom: "20px", padding: "10px", border: "1px solid #0ff" }}>
      <h2>Sibling A</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Ketik sesuatu..."
        style={{ padding: "8px", borderRadius: "6px", border: "1px solid #333" }}
      />
    </div>
  );
}

// Komponen saudara kedua: menampilkan state
function SiblingB({ value }) {
  return (
    <div style={{ padding: "10px", border: "1px solid #f0f" }}>
      <h2>Sibling B</h2>
      <p>Nilai dari Sibling A: <strong>{value}</strong></p>
    </div>
  );
}

// Komponen induk: menyimpan state dan membagikannya ke saudara
function App() {
  const [sharedValue, setSharedValue] = useState("");

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>Berbagi State antar Komponen Saudara</h1>
      <SiblingA value={sharedValue} onChange={setSharedValue} />
      <SiblingB value={sharedValue} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
export default App;