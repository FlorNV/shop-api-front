import React from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { _id, title, image, price, categories } = product;

  const formattedPrice = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(price);

  return (
    <Link to={`/${_id}`}>
      <div className="h-80 rounded-md bg-white shadow-sm transition-shadow duration-200 hover:shadow-xl relative group">
        <div className="opacity-0 transition-all duration-200 group-hover:opacity-100 hover:text-orange-400 absolute top-2 right-2 p-2 bg-gray-100/75 rounded-full">
          <FaRegHeart />
        </div>
        <div className="h-2/3 border-b">
          <img
            src={image}
            alt={title}
            className="h-full mx-auto object-contain"
          />
        </div>
        <div className="h-1/3 p-4 flex flex-col justify-center">
          <p className="text-xl font-semibold">{formattedPrice}</p>
          <h3 className="text-sm truncate">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
