import React from "react";

// Base interface
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

// Utility Types
type UserDraft = Partial<User>; // semua field optional
type UserPreview = Pick<User, "id" | "name">; // ambil sebagian field
type UserWithoutEmail = Omit<User, "email">; // buang email
type UserRoleMap = Record<number, "admin" | "editor" | "viewer">; // mapping id → role

// Props interface
interface UserCardProps {
  user: User;
  onToggleActive: (id: number) => void;
  roles?: UserRoleMap; // optional tambahan
}

// Type Guards (contoh kalau ada tipe lain)
interface Guest {
  id: number;
  nickname: string;
}

function isUser(person: User | Guest): person is User {
  return (person as User).email !== undefined;
}

function isGuest(person: User | Guest): person is Guest {
  return (person as Guest).nickname !== undefined;
}

// Komponen utama
const UserCard: React.FC<UserCardProps> = ({ user, onToggleActive, roles }) => {
  // Typed event handler + error handling
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    try {
      onToggleActive(user.id);
    } catch (err) {
      console.error("Failed to toggle:", (err as Error).message);
    }
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "0.5rem" }}>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Status: {user.isActive ? "Active ✅" : "Inactive ❌"}</p>

      {/* Role pakai Record */}
      {roles && <p>Role: {roles[user.id] ?? "unknown"}</p>}

      <button onClick={handleClick}>Toggle Active</button>
    </div>
  );
};

export default UserCard;
