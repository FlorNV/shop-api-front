import React, { useEffect, useState } from "react";
import { getProducts } from "../server";
import Card from "./Card";

const Cards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="md:w-4/5 2xl:w-3/5 mx-auto my-6">
      <div className="mx-4 sm:mx-10 md:mx-0 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <Card key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
