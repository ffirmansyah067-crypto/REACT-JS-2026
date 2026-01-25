import { useParams } from "react-router-dom";

const product = {
  1: { id: 1, name: "Mie Ayam", price: "Rp 8.000" },
  2: { id: 2, name: "Bakso", price: "Rp 15.000" },
  3: { id: 3, name: "Mie Ayam Bakso", price: "Rp 12.000" },
};

export default function ProductDetail() {
    const { productId } = useParams();
    const prod = product[productId];

    if (!prod) {
        return <h2>Produk tidak ditemukan</h2>;
    }

    return (
        <div>
            <h2>Detail Produk</h2>
            <p>Nama: {prod.name}</p>
            <p>Harga: {prod.price}</p>
        </div>
    );
}