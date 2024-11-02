import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext();

const CartProvider = ({children}) => {
    
  // const [cart, setCart] = useState([]);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [itemAmount, setItemAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // useEffect(() => {},[cart]);

  useEffect(() => {
    localStorage.setItem("cart",JSON.stringify(cart));  
  },[cart]);

  // update item amount
  useEffect(() => {
    if(cart){
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.quantity;
      },0);
      setItemAmount(amount);
    }
  },[cart]);

  // update total Price
  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.quantity;
    },0);
    setTotalPrice(total);
  },[cart]);

  // add to cart
  const addToCart = (product,id) => {
    const newItem = {...product,quantity:1}
    const cartItem = cart.find((item) => (item.id === id));
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return {...item, quantity: cartItem.quantity +1};
        }else{
          return item;
        }
      });
      setCart(newCart);
    }else{
      setCart([...cart, newItem]);
    }    
  }

  // remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter(item => {
      return item.id !== id;
    });
    setCart(newCart);
  };
  
  const clearAll = () => {
    setCart([]);
    // localStorage.removeItem('cart');
    localStorage.setItem("cart", JSON.stringify([]));
   }

  const increaseQuantity = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem,id);
  }

  const decreaseQuantity = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      const newCart = cart.map(item => {
        if (item.id === id) {
          return {...item, quantity : item.quantity-1}
        }else{
          return item;
        }
      });
      setCart(newCart);
    }
    if(cartItem.quantity < 2){
      removeFromCart(id);
    }
  }
  
  return <CartContext.Provider value={{cart,addToCart, removeFromCart, clearAll, increaseQuantity, decreaseQuantity, itemAmount, totalPrice}}>{children}</CartContext.Provider>
}
export default CartProvider;