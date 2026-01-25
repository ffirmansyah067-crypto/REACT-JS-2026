import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Mie Ayam" },
  { id: 2, name: "Bakso" },
  { id: 3, name: "Mie Ayam Bakso" },
];

export default function Products() {
  return (
    <div>
        <h2>Daftar Produk</h2>
        <ul>
            {products.map((product) => (
            <li key={product.id}>
                <Link to={`/products/${product.id}`}>{product.name}</Link>
            </li>
            ))}
        </ul>
        </div>
    );
}    
