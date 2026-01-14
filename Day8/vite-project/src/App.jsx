import ConditionalMessage from "./components/IfElseStatement";
import UserDashboard from "./components/Ternary";
import StatusMessage from "./components/SwitchStatement";
import RenderingKeyAndMap from "./components/RenderingKeyAndMap";
import ProductList from "./components/HandlingEmptyState";

function App() {
  return (
    <div>
      <h1>Uji Coba</h1>
      <ConditionalMessage />
      <UserDashboard />
      <StatusMessage status="loading" />
      <StatusMessage status="success" />
      <RenderingKeyAndMap />
      <ProductList products={[]} />
      <ProductList
        products={[
          { id: 1, name: "Mie Ayam Porsi Brutal", price: 18000 },
          { id: 2, name: "Nasi Goreng Spesial Lebaran", price: 20000 },
        ]}
      />
    </div>
  );
}

export default App;
