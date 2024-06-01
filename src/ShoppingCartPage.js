import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function ShoppingCartPage({ cart, updateCart }) {
  const increaseQuantity = (id) => {
    const updatedCart = cart.map(item =>
      item.id === id && item.availableQty > item.quantity
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    updateCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart.reduce((acc, item) => {
      if (item.id === id) {
        if (item.quantity > 1) {
          acc.push({ ...item, quantity: item.quantity - 1 });
        }
      } else {
        acc.push(item);
      }
      return acc;
    }, []);
    updateCart(updatedCart);
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    updateCart(updatedCart);
  };

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Container>
      <h2 style={{ marginBottom: '20px' , marginTop: '40px'}}>Shopping Cart</h2>
      <hr/>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map(item => (
            <Row key={item.id} className="mb-3">
              <Col xs={12} sm={6} md={4}>
                <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', marginRight: '10px' }} />
                {item.name}
              </Col>
              <Col xs={4} sm={3} md={2}>₹{item.price.toFixed(2)}</Col>
              <Col xs={4} sm={3} md={2}>
                <Button variant="outline-secondary" onClick={() => decreaseQuantity(item.id)}>-</Button>
                <span className="mx-2">{item.quantity}</span>
                <Button variant="outline-secondary" onClick={() => increaseQuantity(item.id)}>+</Button>
              </Col>
              <Col xs={4} sm={3} md={2}>
                <Button variant="outline-danger" onClick={() => removeItem(item.id)}>Remove</Button>
              </Col>
            </Row>
            
          ))}  
          <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col><h3>Total: ₹{totalAmount.toFixed(2)}</h3></Col>
          </Row>
        </div>
      )}
    </Container>
  );
}

export default ShoppingCartPage;
