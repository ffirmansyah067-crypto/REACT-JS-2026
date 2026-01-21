import React from "react";
import UserProfile from "./components/UserProfile";
import ThemedButton from "./components/ThemedButton";
import ThemedCard from "./components/ThemedCard";
import ThemedText from "./components/ThemedText";
import Header from "./components/Header";
import ProductList from "./components/ProductList"; 
import CartDisplay from "./components/CartDisplay";

const App = () => {
  return (
    <div className="container">
      {/* Header di bagian atas */}
      <Header />

      <h1 className="page-title">Aplikasi Context Provider</h1>

      {/* Komponen lain */}
      <UserProfile />
      <ThemedButton />
      <ThemedCard />
      <ThemedText />
      <ProductList />
      <CartDisplay />
    </div>
  );
};

export default App;
