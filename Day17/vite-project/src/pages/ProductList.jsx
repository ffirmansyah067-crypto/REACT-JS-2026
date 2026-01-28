import { useSearchParams } from "react-router-dom";

const ProductList = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";
  const sort = searchParams.get("sort") || "asc";

  const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Smartphone", price: 800 },
    { id: 3, name: "Headphones", price: 200 },
    { id: 4, name: "Keyboard", price: 100 },
  ];

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) =>
    sort === "asc" ? a.price - b.price : b.price - a.price
  );

  return (
    <div>
      <h2>Product List</h2>
      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearchParams({ search: e.target.value, sort })}
      />
      <button onClick={() => setSearchParams({ search, sort: sort === "asc" ? "desc" : "asc" })}>
        Sort: {sort === "asc" ? "Ascending" : "Descending"}
      </button>

      <ul>
        {sorted.map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
