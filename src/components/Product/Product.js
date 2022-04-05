import React from 'react';

const Product = ({ product }) => {
    const { name, img } = product
    return (
        <div>
            {
                product.id < 4 && <div>
                    <img className=' w-56 h-56' src={img} alt="" />
                    <h3>{name}</h3>
                </div>
            }
        </div>
    );
};

export default Product;