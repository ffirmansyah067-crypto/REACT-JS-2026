// App.jsx
import Greeting from './components/Greeting'; // Import komponen yang telah dibuat
import Welcome from './components/Welcome';
import ProductCard from './components/ProductCard';
import Button from './components/Button';
const handleClick = () => {
    alert('Tombol diklik!');
  };
import GreetingCard from './components/GreetingCard';
import Card from './components/Card';
import Comment from './components/Comment';

function App() {


  
  return (
    <div>
      <Greeting /> {/* Menggunakan komponen seperti tag HTML */}
      <p>Hi Im Programmer.</p>

      <Welcome name="Kanaya" /> {/* Meneruskan prop 'name' */}
      <Welcome name="Branz" />   {/* Meneruskan prop 'name' yang berbeda */}

      <ProductCard productName="Laptop Gaming" price={1500} stock={10} isAvailable={true} />
      <ProductCard productName="Keyboard Wireless" price={120} isAvailable={false} />

      <Button onClick={handleClick} text="Klik Saya" color="blue" />
      <Button onClick={() => console.log('Tombol kedua diklik')} text="Tombol Lain" color="green" />

      <GreetingCard name="Amel" message="Selamat Pagi" />
      <GreetingCard name="Khansa" /> {/* message akan menggunakan nilai default "Halo" */}
      {/* <GreetingCard />    name akan "Pengunjung", message akan "Halo" */}

      <Card>
        <h2>Aku Kamu Dan Samudera</h2>
        <p>Ini adalah cerita tentang aku dan kamu</p>
        <button>Detail</button>
      </Card>

      <Card>
        <h3>Romeo & Juliet</h3>
        <ul>
          <li>Nomer 1</li>
          <li>Nomer 2</li>
        </ul>
      </Card>
    </div>

    

    
  );
}

export default App; 


