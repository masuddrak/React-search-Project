import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import Product from '../Product/Product';

const Home = () => {
    const [products, setProducts] = useProducts()
    return (
        <div>
            <h1 className='text-2xl text-center'>Show Product</h1>
            <div className='text-center'>
                <div className='grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-between justify-items-center m-6 gap-2'>
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                        ></Product>)
                    }
                </div>
            </div>
            <div className='text-center'>
                <Link className=' bg-slate-900 text-white py-2 px-4 text-center' to='/shop'>Show All</Link>
            </div>
        </div>
    );
};

export default Home;