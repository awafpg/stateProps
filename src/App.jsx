import { useState } from 'react'
import ProductCard from './components/ProductCard';
import './App.css'

function App() {
  const [umur, setUmur] = useState(''); 
  const [nama, setNama] = useState('');
  const [harga, setHarga] = useState('');
  const [deskripsi, setDeskripsi] = useState('');

  const handleChange = (e) => {
    setUmur(e.target.value);
  };

  const getPesan = () => {
    const nilaiUmur = parseInt(umur); 
    if (isNaN(nilaiUmur)) return 'isi angka aja!';
    else if (nilaiUmur < 18) return 'Kamu belum cukup umur';
    else return 'Selamat datang!';
  };

  return (
    <>
    <div className='border-2 p-3 border-white font-sans font-semibold'>
      <label >
        Masukkan Umur:{' '}
        <input className='border-1 border-white' type="number" value={umur} onChange={handleChange} />
      </label>
      <p>{getPesan()}</p>
    </div>

    <div className='mb-[20px] font-arial'>
      <h1>Masukan Produk</h1>
      
      <div className='mb-[10px]'>
        <label>Nama Produk: </label><br />
        <input
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
      </div>

      <div className='mb-[10px]'>
        <label>Harga Produk: </label><br />
        <input
          type="number"
          value={harga}
          onChange={(e) => setHarga(e.target.value)}
        />
      </div>

      <div className='mb-[10px]'>
        <label>Deskripsi Produk: </label><br />
        <textarea
          value={deskripsi}
          onChange={(e) => setDeskripsi(e.target.value)}
        />
      </div>

      <hr />

      <h2>Preview Produk:</h2>
      <ProductCard nama={nama} harga={harga} deskripsi={deskripsi} />
    </div>
    </>
  );
}


export default App
