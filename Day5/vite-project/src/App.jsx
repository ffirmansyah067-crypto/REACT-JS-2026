import React, { useState } from 'react'
import './App.css'
import ContactForm from './components/ContactForm.jsx'
import TodoList from './components/TodoList.jsx'

function App() {

  const [count, setCount] = useState(0);

  const [name, setName] = useState('Haiz');
  const [age, setAge] = useState(20);
  const [isEditing, setIsEditing] = useState(false);


  return (
    <>
      <div>
        <p>Anda mengklik {count} kali</p>
        <button onClick={() => setCount(count + 1)}>
          Klik Disini
        </button>
      </div>

      <div>
        <h2>Profil Pengguna</h2>
        {isEditing ? (
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
            />
            <button onClick={() => setIsEditing(false)}>Simpan</button>
          </div>
        ) : (
          <div>
            <p>Nama: {name}</p>
            <p>Usia: {age}</p>
            <button onClick={() => setIsEditing(true)}>Edit Profil</button>
          </div>
        )}
      </div>

      <div className="App" style={{ textAlign: 'center', padding: '50px' }}>
        <h1>Aplikasi Kontak Saya</h1>

        {/* Menggunakan komponen ContactForm */}
        <ContactForm />

        <p style={{ marginTop: '20px', color: 'gray' }}>Aplikasi ini hanya berisi formulir kontak.</p>
      </div>

      <div className="App" style={{ textAlign: 'center', padding: '30px', backgroundColor: '#2d515bff' }}>
        <h1>Aplikasi Utama Saya</h1>

        {/* Menggunakan komponen TodoList */}
        <TodoList />

        <p style={{ marginTop: '20px', color: 'gray' }}>Aplikasi ini siap mengelola tugas Anda!</p>
      </div>

    </>
  )
}

export default App
