export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li
      style={{
        listStyle: "none",
        background: "#020617",
        padding: "10px",
        borderRadius: "8px",
        marginBottom: "8px",
        border: "1px solid #1f2937",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />

        <span
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            opacity: todo.completed ? 0.6 : 1,
            color: "#e5e7eb",
          }}
        >
          {todo.text}
        </span>
      </div>

      <button
        onClick={() => onDelete(todo.id)}
        style={{
          background: "#dc2626",
          border: "none",
          padding: "6px 10px",
          borderRadius: "6px",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    </li>
  );
}
