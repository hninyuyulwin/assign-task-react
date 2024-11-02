import React, { useContext} from "react";
import { Link } from "react-router-dom";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/16/solid";
import { CartContext } from "../contexts/CartConntext";

const CartItem = ({ product }) => {
  const {removeFromCart,decreaseQuantity,increaseQuantity} = useContext(CartContext);
  
  return (
    <div>
      <div className="flex gap-x-4 py-2 xl:px-6 border-b border-gray-200 w-1/2 mx-auto font-light text-gray-500 p-10">
        <div className="w-full min-h-[150px] flex items-center gap-x-4 ">
          <Link to={`/product/${product.id}`}>
            <img
              className="max-w-[80px]"
              src={product.image}
              alt={product.title}
            />
          </Link>
          <div className="w-full flex flex-col">
            <div className="flex justify-between mb-2">
              <div className="text-sm font-medium uppercase text-primary hover:underline max-w-[240px]">
                {product.title}
              </div>
              <div onClick={() => removeFromCart(product.id)}>
                <TrashIcon className="w-8 cursor-pointer text-red-500" />
              </div>
            </div>

            <div className="flex gap-x-2 text-sm h-[36px]">
              <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
                <div
                  onClick={() => decreaseQuantity(product.id)}
                  className="flex-1  h-full flex justify-center items-center cursor-pointer border-r-2 "
                >
                  <MinusIcon className="text-3xl font-medium" />
                </div>
                <div className="h-full font-medium text-lg flex justify-center items-center px-2">
                  {product.quantity}
                </div>
                <div
                  onClick={() => increaseQuantity(product.id)}
                  className="flex-1 h-full flex justify-center items-center cursor-pointer border-l-2"
                >
                  <PlusIcon className="text-3xl font-medium" />
                </div>
              </div>

              <div className="flex-1 flex justify-end items-center text-primary font-medium">
                $ {parseFloat(product.price * product.quantity).toFixed(2)}
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
