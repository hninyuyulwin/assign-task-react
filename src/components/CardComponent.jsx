import { useEffect, useState } from 'react'
import { Card } from './Card'

export const CardComponent = ({title,url}) => {
    const [types, setTypes] = useState([]);

    
    useEffect(() => {
        fetchAllTypes();
    }, []);
    
//    useEffect(() => async () => {
//     const response = await axios.get(url);
//     console.log(response);
//    }, [])
   

    const fetchAllTypes = async () => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);        
        setTypes(data);
        
    //    const response = await axios.get(url);
    //    console.log(response);
       
    }

    return (
        <section className='px-5 my-10'>
            <h1 className='text-5xl font-bold text-mono text-black'>{title}</h1>
            <div className='grid grid-cols-5 gap-5 mt-5'>
                {
                    types.map((type) => (
                        <Card key={type.id} type={type} />
                    ))
                }
            </div>
        </section>
    )
}
