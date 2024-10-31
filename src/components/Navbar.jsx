import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='flex items-center justify-between bg-black text-white px-10 py-4'>
      <h3 className='text-2xl font-bold font-mono'>Product API Fetching</h3>
      <div className='flex items-center mr-2 '>
        <NavLink to={"/"} className={({isActive}) => (isActive ? "active-text" : "inactive-text")} style={{marginRight:"10px"}} >Products</NavLink>
        <h5>Categories</h5>
      </div>
      <form action="" className='flex items-center justify-center'>
        <input type="text" name="" className='text-xl bg-transparent border-b-2 border-b-slate-300 focus:outline-none'/>
        <button type='submit'>
        <MagnifyingGlassIcon className='w-8 h-8' />
        </button>
      </form>
    </nav>
  )
}
