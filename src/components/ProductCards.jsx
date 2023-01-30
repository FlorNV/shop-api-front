import React, { useEffect, useState } from "react";
import { getProducts } from "../server";
import ProductCard from "./ProductCard";
import Skeleton from "./Skeleton";

const ProductCards = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="md:w-4/5 2xl:w-3/5 mx-auto my-6">
      <div className="mx-4 sm:mx-10 md:mx-0 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {isLoading
          ? [...Array(10)].map((element, index) => <Skeleton key={index} />)
          : products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default ProductCards;
