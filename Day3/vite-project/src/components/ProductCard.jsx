// ProductCard.jsx

function ProductCard(props) {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      <h3>{props.productName}</h3>
      <p>Harga: ${props.price}</p>
      <p>Stok: {props.stock}</p>
      {props.isAvailable && <p style={{ color: 'green' }}>Tersedia</p>}
    </div>
  );
}

export default ProductCard;