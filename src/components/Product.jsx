import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../app/features/cartSlice";
import { toast } from "react-toastify";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const handleAdd = (product) => {
    dispatch(add(product));
    toast.success("Product Added to cart successfully", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };
  return (
    <div class="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={product.images[0]} alt={product.title} />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{product.title}</h2>
        <p className="text-gray-500">{product.description}</p>
        <div class="card-actions justify-between mt-3">
          <div className="text-4xl">${product.price}</div>
          <div>
            <button
              class="btn btn-outline mr-2"
              onClick={() => handleAdd(product)}
            >
              Add to cart
            </button>
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
