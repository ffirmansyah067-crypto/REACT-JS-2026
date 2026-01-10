export default function TodoFilter({ filter, setFilter }) {
  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "16px" }}>
      <button
        onClick={() => setFilter("all")}
        style={{
          padding: "6px 12px",
          borderRadius: "6px",
          background: filter === "all" ? "#2563eb" : "#1f2937",
          color: "#e5e7eb",
          border: "none",
          cursor: "pointer",
        }}
      >
        All
      </button>

      <button
        onClick={() => setFilter("active")}
        style={{
          padding: "6px 12px",
          borderRadius: "6px",
          background: filter === "active" ? "#2563eb" : "#1f2937",
          color: "#e5e7eb",
          border: "none",
          cursor: "pointer",
        }}
      >
        Active
      </button>

      <button
        onClick={() => setFilter("completed")}
        style={{
          padding: "6px 12px",
          borderRadius: "6px",
          background: filter === "completed" ? "#2563eb" : "#1f2937",
          color: "#e5e7eb",
          border: "none",
          cursor: "pointer",
        }}
      >
        Completed
      </button>
    </div>
  );
}
