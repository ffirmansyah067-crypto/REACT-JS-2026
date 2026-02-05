import { useState, useCallback } from "react";
import { Product } from "@/types/product";
import { useProductsContext } from "@/context/ProductContext";

const DashboardPage = () => {
    const { products, addProduct, updateProduct, deleteProduct } = useProductsContext();
    const [newProduct, setNewProduct] = useState<Product>({
        id: Date.now(),
        title: "",
        price: 0,
        description: "",
        category: "",
        image: "https://via.placeholder.com/150"
    });
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);

    const handleAddProduct = useCallback(() => {
        addProduct(newProduct);
        setNewProduct({
            id: Date.now(),
            title: "",
            price: 0,
            description: "",
            category: "",
            image: "https://via.placeholder.com/150"
        });
    }, [newProduct, addProduct]);

    const handleSaveEdit = useCallback(() => {
        if (editingProduct) {
            updateProduct(editingProduct);
            setEditingProduct(null);
        }
    }, [editingProduct, updateProduct]);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

            {/* Form Tambah Produk */}
            <div className="border p-4 rounded mb-6">
                <h2 className="font-semibold mb-2">Tambah Produk Baru</h2>
                <input
                    type="text"
                    placeholder="Title"
                    value={newProduct.title}
                    onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
                    className="border px-2 py-1 mr-2"
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
                    className="border px-2 py-1 mr-2"
                />
                <button
                    onClick={handleAddProduct}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                >
                    Add
                </button>
            </div>

            {/* Daftar Produk */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {products.map((p) => (
                    <div key={p.id} className="border p-4 rounded shadow">
                        <img src={p.image} alt={p.title} className="h-32 mx-auto" />
                        <h3 className="font-bold">{p.title}</h3>
                        <p>${p.price}</p>
                        <div className="flex gap-2 mt-2">
                            <button
                                onClick={() => setEditingProduct(p)}
                                className="bg-yellow-500 text-white px-2 py-1 rounded"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => deleteProduct(p.id)}
                                className="bg-red-500 text-white px-2 py-1 rounded"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal Edit Produk */}
            {editingProduct && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-96">
                        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                            Edit Product
                        </h2>
                        <input
                            type="text"
                            value={editingProduct.title}
                            onChange={(e) =>
                                setEditingProduct({ ...editingProduct, title: e.target.value })
                            }
                            className="border rounded px-3 py-2 w-full mb-3 focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="number"
                            value={editingProduct.price}
                            onChange={(e) =>
                                setEditingProduct({ ...editingProduct, price: Number(e.target.value) })
                            }
                            className="border rounded px-3 py-2 w-full mb-3 focus:ring-2 focus:ring-blue-500"
                        />
                        <textarea
                            value={editingProduct.description}
                            onChange={(e) =>
                                setEditingProduct({ ...editingProduct, description: e.target.value })
                            }
                            className="border rounded px-3 py-2 w-full mb-3 focus:ring-2 focus:ring-blue-500"
                        />
                        <div className="flex gap-3">
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                                Save
                            </button>
                            <button
                                onClick={() => setEditingProduct(null)}
                                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>

            )}
        </div>
    );
};

export default DashboardPage;
