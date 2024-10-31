import { Link } from 'react-router-dom'

export const Card = ({type}) => {
  return (
    <Link to={`/details/${type.id}`} className='rounded-lg overflow-hidden relative'>
      <div className="flex flex-col justify-center align-middle text-center">
        <img className='w-1/2 h-full text-center' src={type.image} alt={type.name} />
        <div className='mt-3'>
          <p>{type.title}</p>
          <span>$ {type.price}</span>
        </div>
      </div>
    </Link>
  )
}
