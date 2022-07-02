import React from 'react'

const Product = (props) => {
    const { product } = props;
    return (
        <div>
            <p>{product.name}</p>
            <p>{product.mrp}</p>
            <p>{product.discount}</p>
            <p>{product.discountedSellingPrice}</p>
        </div>
    )
}

export default Product