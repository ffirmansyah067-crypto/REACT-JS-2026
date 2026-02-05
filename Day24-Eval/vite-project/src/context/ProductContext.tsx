import { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "@/types/product";

interface ProductContextType {
  products: Product[];
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (id: number) => void;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    setProducts((prev) => [...prev, { ...product, id: Date.now() }]);
  };

  const updateProduct = (product: Product) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === product.id ? product : p))
    );
  };

  const deleteProduct = (id: number) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <ProductContext.Provider
      value={{ products, addProduct, updateProduct, deleteProduct, setProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductsContext = () => {
  const ctx = useContext(ProductContext);
  if (!ctx) throw new Error("useProductsContext must be used within ProductProvider");
  return ctx;
};
