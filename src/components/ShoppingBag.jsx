import React, { useContext } from "react";
import CartItem from "./CartItem";
import { TrashIcon } from "@heroicons/react/20/solid";
import { CartContext } from "../contexts/CartConntext";

const ShoppingBag = () => {
  const {totalPrice,cart,clearAll} = useContext(CartContext);

  // const [totalPrice, setTotalPrice] = useState(0);

  // const [cart, setCart] = useState(() => {
  //   const savedCart = localStorage.getItem("cart");
  //   return savedCart ? JSON.parse(savedCart) : [];
  // });

  // useEffect(() => {
  //   setCart(JSON.parse(localStorage.getItem("cart")));
  // }, []);

  /*
  useEffect(() => {
    // setCart(JSON.parse(localStorage.getItem('cart')));
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price * currentItem.quantity;
      }, 0);
      setTotalPrice(amount);
    }
  }, [cart]);
  */

  // const clearAll = () => {
  //   setCart([]);
  //   localStorage.setItem("cart", JSON.stringify([]));
  // };

  return (
    <div className="">
      <h3 className="text-2xl font-semibold text-blue-500 text-center mt-3">
        Shopping Cart List
      </h3>
      <div>
        <div>
          {cart &&
            cart.map((item) => (
            <CartItem key={item.id} product={item} />
          ))
          }
        </div>
      </div>
      <div>
        {cart.length > 0 ? (
          <div className="flex w-1/2 mx-auto justify-between items-center p-5">
            <div onClick={clearAll}>
              <TrashIcon className="w-8 text-red-400 cursor-pointer" />
            </div>
            <p className="text-lg font-semibold">
              <span>Total : </span>${parseFloat(totalPrice).toFixed(2)}
            </p>
          </div>
        ) : (
          <p className="text-2xl font-semibold text-red-500 text-center my-8 border-t-2 border-b-2 p-5">
            Empty Cart
          </p>
        )}
      </div>
    </div>
  );
};

export default ShoppingBag;
