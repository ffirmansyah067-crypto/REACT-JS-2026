// GreetingCard.jsx

function GreetingCard({ name, message }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px' }}>
      <h2>{message}, {name}!</h2>
      <p>Semoga harimu menyenangkan.</p>
    </div>
  );
}

// Mendefinisikan nilai default untuk props
GreetingCard.defaultProps = {
  name: 'Pengunjung',
  message: 'Halo'
};

export default GreetingCard;