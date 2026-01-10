import { useState } from "react";

export default function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    onAdd(text.trim());
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", gap: "8px", marginBottom: "16px" }}
    >
      <input
        type="text"
        placeholder="Tambah todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          flex: 1,
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #4b5563",
          background: "#020617",
          color: "#e5e7eb",
        }}
      />

      <button
        type="submit"
        style={{
          padding: "10px 16px",
          borderRadius: "8px",
          border: "none",
          background: "#22c55e",
          color: "#022c22",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        Add
      </button>
    </form>
  );
}
