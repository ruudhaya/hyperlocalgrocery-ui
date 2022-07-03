import React, { useState } from 'react'
import Product from './Product'

const ProductList = (props) => {
  const products = props.products;
 
  return (
    <div className="d-flex align-content-start flex-wrap">
        {
            products ? products.map((prod) => <Product key={prod.id} product={prod} />) : <></>
        }
    </div>
  )
}

export default ProductList