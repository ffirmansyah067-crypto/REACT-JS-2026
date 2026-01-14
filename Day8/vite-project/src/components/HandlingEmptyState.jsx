import React from 'react';

function ProductList({ products }) {
  if (products.length === 0) {
    // kondisi empty state
    return (
      <div>
        <h2>Daftar Produk</h2>
        <p>Tidak ada produk tersedia.</p>
      </div>
    );
  }

  // kondisi normal: ada data
  return (
    <div>
      <h2>Daftar Produk</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - Rp{product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
