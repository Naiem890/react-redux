import React from "react";
import { useSelector } from "react-redux";
import { remove } from "../app/features/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(remove(id));
    toast.error("Product Removed successfully", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };
  return (
    <div className="mt-10 max-w-7xl px-4 mx-auto">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">My Cart ({products.length})</h2>
        <h3 className="text-2xl font-bold">
          Total Price: $
          {products.reduce((previousProduct, currentProduct) => {
            return previousProduct + currentProduct.price;
          }, 0)}
        </h3>
      </div>
      <div className="my-10 grid grid-cols-2 gap-6">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="shadow-md border flex gap-6 items-center"
            >
              <div className="w-36">
                <img src={product.images[0]} alt="" />
              </div>
              <div>
                <h3 className="text-2xl">{product.title}</h3>
                <p className="text-xl font-bold text-gray-400">
                  Price: {product.price}
                </p>
              </div>
              <div className="ml-auto">
                <button
                  className="btn btn-ghost btn-circle mr-4"
                  onClick={() => handleDelete(product.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
