import { useRef } from "react";

function DomAccessExample() {
  // useRef dengan tipe spesifik
  const inputRef = useRef<HTMLInputElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  // Fokus ke input
  const handleFocus = () => {
    inputRef.current?.focus();
  };

  // Scroll ke bawah
  const handleScroll = () => {
    if (boxRef.current) {
      boxRef.current.scrollTop = boxRef.current.scrollHeight;
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Demo useRef (Vite + TS)</h2>

      <input
        ref={inputRef}
        type="text"
        placeholder="Klik tombol untuk fokus ke sini"
        style={{ padding: "8px", marginBottom: "10px", width: "250px" }}
      />
      <br />

      <button onClick={handleFocus} style={{ marginRight: "10px" }}>
        Fokus ke Input
      </button>
      <button onClick={handleScroll}>Scroll ke Bawah</button>

      <div
        ref={boxRef}
        style={{
          marginTop: "20px",
          width: "300px",
          height: "120px",
          overflowY: "scroll",
          border: "1px solid #ccc",
          padding: "10px",
        }}
      >
        {Array.from({ length: 15 }, (_, i) => (
          <p key={i}>Baris {i + 1}</p>
        ))}
      </div>
    </div>
  );
}

export default DomAccessExample;
