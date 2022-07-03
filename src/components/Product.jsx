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
                <Card.Text>{product.mrp}</Card.Text>
                <Card.Text>{product.discount}%</Card.Text>
                <Card.Title>{product.discountedSellingPrice}</Card.Title>
                <Button className="card-btn" variant="primary">Add to Cart</Button>
            </div>
            </Card.Body>
        </Card>
    )
}

export default Product