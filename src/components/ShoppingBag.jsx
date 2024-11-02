import React, { useEffect, useState } from 'react'
import CartItem from './CartItem';
import { TrashIcon } from '@heroicons/react/20/solid';

const ShoppingBag = () => {
    // const {totalPrice,cart,clearAll} = useContext(CartConntext);

    const [totalPrice, setTotalPrice] = useState(0);
    
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem('cart')));
    },[]);

    useEffect(() => {
        // setCart(JSON.parse(localStorage.getItem('cart')));
        if(cart){
        const amount = cart.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.price * currentItem.quantity;
        },0);
        setTotalPrice(amount);
        }
    },[cart]);

    const clearAll = () => {
        setCart([]);
        localStorage.setItem('cart', JSON.stringify([]));
    };

  return (
    <div className=''>
        <h3 className='text-2xl font-semibold text-blue-500 text-center mt-3'>Shopping Cart List</h3>
        <div>
            <div>
            {
                cart && cart.map((item) => (
                    <CartItem key={item.id} product={item} />
                ))
            }
            </div>
        </div>
        <div>
            {
                cart.length > 0 ? (
                <div className='flex w-1/2 mx-auto justify-between items-center p-5'>
                    <div onClick={clearAll}>
                        <TrashIcon className='w-8 text-red-400 cursor-pointer' />
                    </div>
                    <p className='text-lg font-semibold'><span>Total : </span>${parseFloat(totalPrice).toFixed(2)}</p>
                </div>
                ) : (
                    <p className='text-2xl font-semibold text-red-500 text-center my-8 border-t-2 border-b-2 p-5'>Empty Cart</p>
                )
            }
        </div>
       
    </div>
  );
}

export default ShoppingBag;



// import React, { useEffect, useState } from 'react';
// import CartItem from './CartItem';
// import { TrashIcon } from '@heroicons/react/20/solid';

// const ShoppingBag = () => {
//     const [cart, setCart] = useState([]);

//     useEffect(() => {
//         const savedCart = JSON.parse(localStorage.getItem('cart'));
//         setCart(savedCart || []); // Set cart to an empty array if savedCart is null
//     }, []);

//     const clearCart = () => {
//         console.log("Hello From All Clear Cart");        
//     }

//     return (
//         <div>
//             <h3 className='text-2xl font-semibold text-blue-500 text-center mt-3'>Shopping Cart List</h3>
//             <div>
//                 {
//                     cart.length > 0 ? ( // Corrected `lenght` typo to `length`
//                         <div>
//                             {
//                                 cart.map((item) => (
//                                     <CartItem key={item.id} product={item} />
//                                 ))
//                             }
//                         </div>
//                     ) : (
//                         <p className='text-center text-red-500 font-4xl mt-5'>No products in the cart list.</p>
//                     )
//                 }
//             </div>
//             <div className='flexgap-x-4 py-2 xl:px-6 border-gray-200 w-1/2 mx-auto font-light text-gray-500 p-10'>
//                 <div className='flex w-full justify-between items-center'>
//                 <div onClick={clearCart} className='cursor-pointer py-4 w-12 h-12 flex justify-end items-center text-xl' >
//                     <TrashIcon className='w-10 text-red-500'/>
//                 </div>
//                 <div className='uppercase font-semibold'>
//                     <span className='mr-2'>Total : </span>$190,000/-
//                 </div>
                
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ShoppingBag;
