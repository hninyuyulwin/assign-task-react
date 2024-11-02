import { ShoppingBagIcon } from '@heroicons/react/16/solid'
import { Link, NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../contexts/CartConntext'

export const Navbar = () => {
  const {itemAmount} = useContext(CartContext);
  /*
  const [itemAmount, setItemAmount] = useState(0);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  useEffect(() => {
    if(cart){
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.quantity;
      },0);
      setItemAmount(amount);
    }
  },[cart]);
  */
  
  return (
    <nav className='flex items-center justify-between bg-black text-white px-10 py-4'>
      <h3 className='text-2xl font-bold font-mono'>Product API Fetching</h3>
      <div className='flex items-center mr-2 '>
        <NavLink to={"/"} className={({isActive}) => (isActive ? "active-text" : "inactive-text")} style={{marginRight:"10px"}} >Products</NavLink>
        <NavLink to={"/categories"} className={({isActive}) => ( isActive ? "active-text" : "inactive-text" )}>Categories</NavLink>
      </div>

      <Link to={'/carts'}  className='cursor-pointer flex relative max-w-[50px]' >
        <ShoppingBagIcon className='w-8 text-gray-400' />
        <div className='bg-red-500 absolute -right-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>
          {itemAmount}
        </div>
      </Link>

    </nav>
  )
}
