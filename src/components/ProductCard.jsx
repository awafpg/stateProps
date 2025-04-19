function ProductCard({ nama, harga, deskripsi }) {
    return (
      <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
        <h2>{nama || 'Nama belum diisi'}</h2>
        <p><strong>Harga:</strong> {harga ? `Rp ${harga}` : 'Belum diisi'}</p>
        <p>{deskripsi || 'Deskripsi belum diisi'}</p>
      </div>
    );
  }

  export default ProductCard