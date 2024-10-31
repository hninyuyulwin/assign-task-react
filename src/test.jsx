import { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { Link } from 'react-router-dom';

export const Categories = () => {
  // const [categories,setCategory] = useState([]);
  // const [productByCat, setProductByCat] = useState([]);

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]); // State to hold products
  const [selectedCategory, setSelectedCategory] = useState('All Products'); // State to hold selected category

  useEffect(() => {
    getAllCategories();
    fetchProducts(); // Fetch all products by default
  }, []);

  const getAllCategories = async () => {
    const response = await fetch("https://fakestoreapi.com/products/categories");
    const data = await response.json();
    setCategories(['All Products', ...data]); // Add "All Products" as a default option
  };

  // Fetch products based on category
  const fetchProducts = async (category = 'All Products') => {
    const url = ( category === 'All Products' ? 'https://fakestoreapi.com/products' : `https://fakestoreapi.com/products/category/${category}` );
    const response = await fetch(url);
    const data = await response.json();
    setProducts(data);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    fetchProducts(category);
  };

  return (
    <div>
      <Header />
      <section>
        <div className='flex justify-center align-middle text-center uppercase'>
          {
            categories.map((cat, index) => (
              <p onClick={() => handleCategoryClick(cat) } className='bg-slate-500 rounded-xl px-5 py-3 text-white mr-5 mt-5 cursor-pointer' key={index}>{cat}</p>
            ))
          }
        </div>

        <div className='mt-10'>
          {
            products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map((product) => (
                <Link key={product.id} to={`/details/${product.id}`}>
                <div key={product.id} className='p-5 border rounded-lg shadow-md'>
                  <img src={product.image} alt={product.title} className='w-full h-40 object-contain' />
                  <h3 className='mt-2 font-bold'>{product.title}</h3>
                  <p className='mt-1 text-sm text-gray-500'>{product.description.substring(0, 60)}...</p>
                  <p className='mt-1 font-semibold'>${product.price}</p>
                </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className='text-center mt-5'>No products available for this category.</p>
          )
          }
        </div>

      </section>
    </div>
  )
}
