import React from "react";
import { FC } from "react";
import { Product } from "@/types/product";
import { Link } from "react-router-dom";

interface Props {
  product: Product;
}

const ProductCard: FC<Props> = ({ product }) => {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.title} className="h-40 mx-auto" />
      <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
      <p className="text-green-600 font-bold">${product.price}</p>
      <Link
        to={`/products/${product.id}`}
        className="mt-2 inline-block bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
      >
        Detail
      </Link>
    </div>
  );
};

export default ProductCard;
