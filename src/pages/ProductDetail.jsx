import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const ProductDetail = () => {
    const {id} = useParams(); 
    const [product, setProduct] = useState({});

    useEffect(() => {
        getProductById();
    },[id]);

    const getProductById = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        console.log(data);        
        setProduct(data);
    }

  return (
    <>
        { product && (
            <section className='w-full h-screen'>
                
                <div className='detail-container'>
                <img className='w-60 rounded-md' src={product.image} alt={product.id} />
                
                <div className='ms-4 '>
                    <h1 className='text-2xl font-semibold'>{product.title}</h1>
                    <h4 className='text-sm font-medium mb-3'>{product.category}</h4>
                    <p className='text-md font-medium mb-3'><span className='text-red-600'>Price : </span><i>$ {product.price}</i></p>
                    
                    <p className='text-md font-medium'>{product.description}</p>
                </div>
                </div>
            </section>
        ) }
    </>
  )
}
