import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './componets/CustomNavbar';
import HomePage from './HomePage';
import ShoppingCartPage from './ShoppingCartPage';

const initialTShirts = [
  { id: 1, name: 'Red Polo', color: 'Red', type: 'Polo', price: 250, gender: 'Men', availableQty: 10, image: require('./assets/redpolo.png') },
  { id: 2, name: 'Blue T-Shirt', color: 'Blue', type: 'T-Shirt', price: 599, gender: 'Women', availableQty: 5, image: require('./assets/blue-tshirt.png') },
  { id: 3, name: 'Green Polo', color: 'Green', type: 'Polo', price: 399, gender: 'Men', availableQty: 8, image: require('./assets/green-polo.png') },
  { id: 4, name: 'Red T-Shirt', color: 'Red', type: 'T-Shirt', price: 499, gender: 'Women', availableQty: 12, image: require('./assets/red-tshirt.png') },
  { id: 5, name: 'Blue Tank Top', color: 'Blue', type: 'Tank Top', price: 305, gender: 'Men', availableQty: 6, image: require('./assets/blue-tanktop.png') },
  { id: 6, name: 'Green Sweatshirt', color: 'Green', type: 'Sweatshirt', price: 200, gender: 'Women', availableQty: 15, image: require('./assets/green-sweatshirt.png') },
  { id: 7, name: 'Red Hoodie', color: 'Red', type: 'Hoodie', price: 99, gender: 'Men', availableQty: 7, image: require('./assets/red-hoodie.png') },
  { id: 8, name: 'Blue Polo', color: 'Blue', type: 'Polo', price: 450, gender: 'Women', availableQty: 4, image: require('./assets/blue-polo.png') },
  { id: 9, name: 'Green T-Shirt', color: 'Green', type: 'T-Shirt', price: 320, gender: 'Men', availableQty: 9, image: require('./assets/green-tshirt.png') },
  { id: 10, name: 'Red Sweatshirt', color: 'Red', type: 'Sweatshirt', price: 1100, gender: 'Women', availableQty: 3, image: require('./assets/red-sweatshirt.png') },
];


function App() {
  const [tShirts, setTShirts] = useState(initialTShirts);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const cartItemsFromStorage = JSON.parse(localStorage.getItem('cartItems'));
    if (cartItemsFromStorage) {
      setCart(cartItemsFromStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (tShirt) => {
    const existingItem = cart.find(item => item.id === tShirt.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === tShirt.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...tShirt, quantity: 1 }]);
    }

    setTShirts(tShirts.map(item =>
      item.id === tShirt.id
        ? { ...item, availableQty: item.availableQty - 1 }
        : item
    ));
  };

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    setTShirts(tShirts.map(tShirt => {
      const cartItem = updatedCart.find(item => item.id === tShirt.id);
      return cartItem
        ? { ...tShirt, availableQty: initialTShirts.find(item => item.id === tShirt.id).availableQty - cartItem.quantity }
        : { ...tShirt, availableQty: initialTShirts.find(item => item.id === tShirt.id).availableQty };
    }));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const cartItemCount = cart.length;

  return (
    <Router>
      <div className="App" style={{ marginTop: '90px' }}>
        <CustomNavbar cartItemCount={cartItemCount} searchTerm={searchTerm} handleSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<HomePage tShirts={tShirts} addToCart={addToCart} searchTerm={searchTerm} />} />
          <Route path="/cart" element={<ShoppingCartPage cart={cart} updateCart={updateCart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
