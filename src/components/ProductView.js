import React, { useEffect, useState } from 'react'
import SearchBox from './SearchBox'
import ProductList from './ProductList'
import { Spinner } from 'react-bootstrap'

const ProductView = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        function getData(url){
            return new Promise((resolve, reject) => {
             fetch(url)
              .then(response => {
                if (response.status !== 200) {
                  console.log(
                    "Status Code -" + response.status
                  );
                  return;
                }
          
                response.json().then(data => {
                  resolve(data);
                });
              })
              .catch(function(err) {
                console.log("Fetch Error -", err);
                reject(err)
              });
           })
          }
                    
          async function fetchData(){
            const data = await getData('http://localhost:8080/items');
            setProducts(data);
            setLoading(false);
            console.log(data);
          }

          fetchData();
    }, []);
    
  return (
    <div>
        <SearchBox />
        {loading ? 
            <Spinner animation="grow" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner> : 
            <ProductList products = {products}/>
        }
    </div>
  )
}

export default ProductView