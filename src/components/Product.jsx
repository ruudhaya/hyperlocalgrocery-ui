import React from 'react'
import { Card, Button } from 'react-bootstrap';
import './Product.css'

const Product = (props) => {
    const { product } = props;

    const placeholderImagePath = 'images/placeholder.png';

    return (

        <Card className="cardClass">
            <div style={{textAlign: 'center'}}>
                <Card.Img  className="card-image" variant="top" src={placeholderImagePath} />
            </div>
        
            <Card.Body>
            <div className="card-text-body">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text> MRP ₹{product.mrp}</Card.Text>
                {
                    product.discount > 0 ? <Card.Text>{product.discount}%</Card.Text> : <></>
                }
                
            </div>
            </Card.Body>
            <div className="d-flex justify-content-between align-content-center">
            <Card.Title className="product-price">₹{product.discountedSellingPrice}</Card.Title>
            
                <Button className="card-btn" variant="primary">
                    Add    
                </Button>
                </div>
        </Card>
    )
}

export default Product