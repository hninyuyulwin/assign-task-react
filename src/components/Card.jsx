import { Link } from 'react-router-dom'

export const Card = ({type}) => {
  return (
    <Link to={`/details/${type.id}`} className='rounded-lg overflow-hidden relative'>
      <div key={type.id} className='p-5 border rounded-lg shadow-md'>
        <img src={type.image} alt={type.title} className='w-full h-40 object-contain' />
        <h3 className='mt-2 font-bold'>{type.title}</h3>
        <p className='mt-1 font-semibold'>${type.price}</p>
      </div>
    </Link>
  )
}
