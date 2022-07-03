import React, { useState } from 'react'
import Product from './Product'

const ProductList = (props) => {
  // const { products } = props;
  const [products, _] = useState(props.products)
  console.log("In Product List",props);

  return (
    <div className="d-flex align-content-start flex-wrap">
        {
            products ? products.map((prod) => <Product key={prod.id} product={prod} />) : <></>
        }
    </div>
  )
}

export default ProductList