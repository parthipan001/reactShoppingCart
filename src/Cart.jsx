
import PropTypes from 'prop-types';

const Cart = ({ cartItems, products, onRemoveFromCart }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(id => {
            const product = products.find(product => product.id === id);
            return (
              <li key={id}>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <button onClick={() => onRemoveFromCart(id)}>Remove from cart</button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

Cart.propTypes = {
    cartItems: PropTypes.arrayOf(PropTypes.number).isRequired,
    products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })).isRequired,
    onRemoveFromCart: PropTypes.func.isRequired,
  };

export default Cart;