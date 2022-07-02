import React, { useState } from 'react'
import Product from './Product'

const ProductList = (props) => {
  // const { products } = props;
  const [products, _] = useState(props.products)
  console.log("In Product List",props);
  // const productData = [
  //   {
  //       id: 1,
  //       name: "Onion",
  //       mrp: 25.00,
  //       weight: 1000.0,
  //       weightUnit: "grams",
  //       quantity: 1,
  //       discount: 16.0,
  //       discountUnit: "percentage",
  //       availableQuantity: 3,
  //       discountedSellingPrice: 2100.0
  //   },
  //   {
  //       id: 2,
  //       name: "Tomato Hybrid",
  //       mrp: 42.00,
  //       weight: 1000.0,
  //       weightUnit: "grams",
  //       quantity: 1,
  //       discount: 16.0,
  //       discountUnit: "percentage",
  //       availableQuantity: 3,
  //       discountedSellingPrice: 3528.0
  //   }
  // ]

  return (
    <div>
        {
            products ? products.map((prod) => <Product key={prod.id} product={prod} />) : <></>
        }
    </div>
  )
}

export default ProductList