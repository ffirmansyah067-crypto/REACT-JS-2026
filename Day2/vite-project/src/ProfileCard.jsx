const ProfileCard = ({ name, photo, bio, skills }) => {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '12px',
    padding: '20px',
    maxWidth: '300px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif'
  };

  return (
    <div style={cardStyle}>
      <img 
        src={photo} 
        alt={name} 
        style={{ width: '100px', height: '100px', borderRadius: '50%' }} 
      />
      <h2 style={{ color: '#333' }}>{name}</h2>
      <p style={{ color: '#666', fontSize: '14px' }}>{bio}</p>
      <div style={{ marginTop: '15px' }}>
        <strong>Skills:</strong>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {skills.map((skill, index) => (
            <li key={index} style={{ background: '#e0e0e0', margin: '3px', padding: '5px 10px', borderRadius: '4px', fontSize: '12px' }}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const PricingDetails = ({ userName, originalPrice, discountPercent }) => {
  const calculateDiscount = (price, disc) => price - (price * (disc / 100));

  return (
    <div>
      {/* Manipulasi String */}
      <h3>Halo, {userName.toUpperCase()}!</h3>
      
      {/* Operasi Matematika & Pemanggilan Fungsi */}
      <p>Harga asli: Rp {originalPrice.toLocaleString()}</p>
      <p>Diskon: {discountPercent}%</p>
      <h4>Harga Setelah Diskon: Rp {calculateDiscount(originalPrice, discountPercent).toLocaleString()}</h4>
    </div>
  );
};

const NotificationCenter = ({ isLoggedIn, messageCount }) => {
  return (
    <div>
      {/* Operator Ternary untuk status login */}
      {isLoggedIn ? <button>Logout</button> : <button>Login</button>}

      <hr />

      {/* Logical AND untuk menampilkan jumlah pesan jika lebih dari 0 */}
      {isLoggedIn && messageCount > 0 && (
        <p>Anda memiliki <strong>{messageCount}</strong> pesan baru yang belum dibaca.</p>
      )}

      {isLoggedIn && messageCount === 0 && <p>Tidak ada pesan baru.</p>}
    </div>
  );
};

const ProductList = () => {
  const products = [
    { id: 101, name: 'Laptop Gahar', category: 'Elektronik' },
    { id: 102, name: 'Mouse Wireless', category: 'Aksesoris' },
    { id: 103, name: 'Keyboard Mekanik', category: 'Aksesoris' },
  ];

  return (
    <div>
      <h3>Daftar Produk Terlaris</h3>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> - <small>{product.category}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { ProfileCard, PricingDetails, NotificationCenter, ProductList };

export default ProfileCard;

