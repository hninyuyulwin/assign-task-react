// import  { useEffect, useState } from 'react'
// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/react-splide/css';

export const Header = () => {


  return (
    <section className='text-red-600'>
        {/* <Splide options={{type: "loop", arrows: false, autoplay:true, interval:2000 }} aria-label="Product Images">
            {products.map((prod) => (
                <SplideSlide key={prod.id}>
                    <HeaderCard product={prod} />
                </SplideSlide>
            ))}
        </Splide> */}
         <div className='w-full'>
            <img src="https://t4.ftcdn.net/jpg/04/82/34/25/360_F_482342546_1wmLn0mirBvCALHqhTtOa4wfHR4vvhpd.jpg" alt="banner image" 
            className='w-full h-full object-cover' />
        </div>

    </section>
  )
}
