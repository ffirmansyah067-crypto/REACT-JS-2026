import React from "react";
import ReactDOM from "react-dom/client";

// Komponen paling bawah
function GrandChild({ message }) {
  return (
    <div style={{ padding: "10px", border: "1px solid #0ff", marginTop: "10px" }}>
      <h3>GrandChild Component</h3>
      <p>Pesan diterima: <strong>{message}</strong></p>
    </div>
  );
}

// Komponen level 2
function Child({ message }) {
  return (
    <div style={{ padding: "10px", border: "1px solid #0f0", marginTop: "10px" }}>
      <h2>Child Component</h2>
      {/* Teruskan props ke GrandChild */}
      <GrandChild message={message} />
    </div>
  );
}

// Komponen level 1
function Parent({ message }) {
  return (
    <div style={{ padding: "10px", border: "1px solid #f0f", marginTop: "10px" }}>
      <h1>Parent Component</h1>
      {/* Teruskan props ke Child */}
      <Child message={message} />
    </div>
  );
}

// Komponen paling atas
function App() {
  const data = "Halo dari App (Top Level)!";

  return (
    <div style={{ padding: "20px", background: "#111", color: "#eee" }}>
      <h1>Prop Drilling Demo</h1>
      {/* Kirim data ke Parent */}
      <Parent message={data} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App