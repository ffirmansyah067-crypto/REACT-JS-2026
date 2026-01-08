import ProfileBox from './components/ProfileBox.jsx'
import './App.css'
import Button from './components/Button'
import AlertBox from './components/AlertBox';
import ResponsiveBox from './components/ResponsiveBox';


function App() {

  const handleClick = (type) => {
    alert(`Tombol ${type} diklik!`);
  };

  return (

    <div className="App">
      <ProfileBox name="Rangga Raja" title="Web Developer" />

      <div className="App">
        <ProfileBox name="Andini Hangura" role="Data Analyst" />
      </div>

      <div style={{ padding: '30px' }}>
        <h2>Contoh Penerapan CSS Modules</h2>

        {/* Tombol 1: Menggunakan gaya 'default' (karena tidak ada prop 'variant' yang diberikan) */}
        <Button onClick={() => handleClick('Default')} style={{ marginRight: '10px' }}>
          Tombol Default
        </Button>

        {/* Tombol 2: Menggunakan gaya 'primary' */}
        <Button variant="primary" onClick={() => handleClick('Primary')}>
          Tombol Primary
        </Button>
      </div>

      <div style={{ padding: '20px', backgroundColor: '#667c9fff' }}>
      <h1>Komponen AlertBox Dinamis</h1>
      
      {/* 1. Variasi Success (default) */}
      <AlertBox 
        message="Operasi berhasil diselesaikan. Data Anda telah disimpan dengan aman." 
        variant="success" 
      />
      
      {/* 2. Variasi Warning */}
      <AlertBox 
        message="Peringatan: Beberapa data yang Anda masukkan mungkin tidak lengkap." 
        variant="warning" 
      />
      
      {/* 3. Variasi Error */}
      <AlertBox 
        message="Kesalahan Server: Gagal memproses permintaan. Silakan coba beberapa saat lagi." 
        variant="error" 
      />
      
    </div>
    <div className="App" style={{ 
      textAlign: 'center', 
      fontFamily: 'Arial, sans-serif',
      padding: '20px'
    }}>
      <h1>Komponen Responsif (CSS Modules + Media Query)</h1>
      
      {/* Menggunakan komponen ResponsiveBox */}
      <ResponsiveBox />
      
      <p style={{ marginTop: '30px', fontSize: '14px', color: '#666' }}>
        *Coba ubah ukuran jendela browser Anda (resize) untuk melihat perubahan warna dan padding!
      </p>
    </div>
    </div>
  )
}

export default App