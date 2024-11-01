import { BackwardIcon, ShoppingCartIcon } from '@heroicons/react/16/solid';
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

let count = 0;
export const ProductDetail = () => {
    const {id} = useParams(); 
    const [product, setProduct] = useState({});
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);

    useEffect(() => {
        getProductById();
    },[id]);


    useEffect(() => {
        setTimeout(() => {
            console.log(cart);
            localStorage.setItem("cart",JSON.stringify(cart))         
        }, 1000);
    },[cart]);

    const getProductById = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        // console.log(data);        
        setProduct(data);
    }

    const goBack = () => {
        navigate(-1);
    }

    const addToCart = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setCart([...cart, {id:count++,product_id:data.id, quantity:1,image:data.image,title: data.title} ]);
        localStorage.setItem("cart_count",count);
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

                        <div className='flex justify-center align-middle'>
                        <button onClick={goBack} className='bg-blue-300 px-4 py-2 flex justify-center align-middle rounded-lg mt-3 mr-3'> 
                            <BackwardIcon className='w-5 h-5 mr-2 mt-1' />Go Back
                        </button>
                        <Link>
                            <button onClick={() => addToCart()} className='bg-blue-300 px-4 py-2 flex justify-center align-middle rounded-lg mt-3'> 
                                Add To Cart
                                <ShoppingCartIcon className='w-5 h-5 ml-2 mt-1' />
                            </button>
                        </Link>
                        </div>
                        
                    </div>
                </div>

            </section>

        ) }
    </>
  )
}
