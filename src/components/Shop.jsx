import React, { useEffect, useState } from "react";
import Product from "./Product";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products?limit=12&offset=1")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 mt-8">
      <div>
        <h2 className="text-5xl  font-bold">Featured Products</h2>
        <p className="text-2xl text-gray-500 mt-3">
          Check & Get Your Desired Product !
        </p>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-10">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Shop;
