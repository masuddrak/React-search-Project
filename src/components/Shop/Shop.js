import React, { useEffect, useState } from 'react';
import useProducts from '../../hooks/useProducts';
import AllProduct from '../AllProduct/AllProduct';


const Shop = () => {
    const [search,setSearch]=useState('')
    const [result,setResult]=useProducts([])
        useEffect(()=>{
            fetch('products.json')
            .then(res=>res.json())
            .then(data=>{
                const match=data.filter(product=>product.name.includes(search))
                setResult(match)
            })
        },[search])
    const handalSearch=event=>{
        setSearch(event.target.value)
    }
    return (
        <div>
            <h1 className='text-2xl text-center'>All Items</h1>
            <div className='text-2xl text-center my-2'>
            <input onChange={handalSearch} className='border-2 outline-0' type="text" placeholder='Search' />
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-between justify-items-center m-6 gap-2'>
                
                {
                    result.map(product=><AllProduct
                        key={product.id}
                        product={product}
                    ></AllProduct>)
                }
            </div>
        </div>
    );
};

export default Shop;