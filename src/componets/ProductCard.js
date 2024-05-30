import React from 'react';
import { Card, Button } from 'react-bootstrap';

function ProductCard({ tShirt, addToCart }) {
  return (
    <Card style={{ width: '15rem', marginBottom: '10px', height:'22rem' , backgroundColor : '#F7F7F7'}}>
      <div className="d-flex justify-content-center" style={{ margin: '5px', height: '15rem', overflow: 'hidden' }}>
        <Card.Img
          variant="top"
          src={tShirt.image}
          alt={tShirt.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <Card.Title className="m-0">{tShirt.name}</Card.Title>
          <Card.Text className="mb-0" style={{  fontSize : '20px'}}>₹{tShirt.price}</Card.Text>
        </div>
        <Card.Text style={{marginTop : '5px'}}>Available: {tShirt.availableQty}</Card.Text>
        <div className="d-flex justify-content-center">
          {tShirt.availableQty > 0 ? (
            <Button variant="primary" onClick={() => addToCart(tShirt)}>Add to Cart</Button>
          ) : (
            <Button variant="secondary" disabled>Out of Stock</Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
