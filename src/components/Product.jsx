import React from 'react'

const Product = (props) => {
    const { product } = props;
    return (
        <div>
            <p>{product.name}</p>
        </div>
    )
}

export default Product