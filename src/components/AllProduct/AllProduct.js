import React from 'react';

const AllProduct = ({ product }) => {

    const { name, img } = product
    return (
        <div>
            <img className=' w-56 h-56' src={img} alt="" />
            <h3>{name}</h3>
        </div>
    );
};

export default AllProduct;