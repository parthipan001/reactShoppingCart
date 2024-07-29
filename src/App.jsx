import  { useState } from 'react';
import Navbar from './navbar.jsx';
import ProductList from './ProductList.jsx';
import Cart from './Cart.jsx';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const products = [
    { id: 1, name: 'Fancy Product', price: '$40.00 - $80.00' },
    { id: 2, name: 'Special Item', price: '$18.00' },
    { id: 3, name: 'Sale Item', price: '$25.00' },
    { id: 4, name: 'Popular Item', price: '$40.00' },
  ];

  const handleAddToCart = (id) => {
    setCartItems([...cartItems, id]);
  };

  const handleRemoveFromCart = (id) => {
    setCartItems(cartItems.filter(itemId => itemId !== id));
  };

  return (
    <div className="App">
      <Navbar cartCount={cartItems.length} />
      <header className="hero">
        <h1>Shop in style</h1>
        <p>With this shop homepage template</p>
      </header>
      <ProductList
        products={products}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        cartItems={cartItems}
      />
      <Cart
        cartItems={cartItems}
        products={products}
        onRemoveFromCart={handleRemoveFromCart}
      />
    </div>
  );
}

export default App;