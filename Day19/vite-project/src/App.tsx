import React, { useState } from "react";
import UserCard from "./components/UserCard";
import ProductList from "./components/ProductList";
import Form from "./components/Form";

const App: React.FC = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", email: "alice@mail.com", isActive: true },
    { id: 2, name: "Bob", email: "bob@mail.com", isActive: false },
  ]);

  const products = [
    { id: 1, name: "Laptop", price: 1500, tags: ["tech", "work"] },
    { id: 2, name: "Phone", price: 800, tags: ["mobile", "gadget"] },
  ];

  const toggleUserActive = (id: number): void => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id ? { ...u, isActive: !u.isActive } : u
      )
    );
  };

  const handleFormSubmit = (data: { username: string; age: number; agree: boolean }) => {
    console.log("Form submitted:", data);
  };

  return (
    <div>
      <h1>Type-Safe Components Demo</h1>

      {users.map((user) => (
        <UserCard key={user.id} user={user} onToggleActive={toggleUserActive} />
      ))}

      <ProductList products={products} />

      <Form onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;
