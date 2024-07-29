
import PropTypes from 'prop-types';

const ProductCard = ({ product, onAddToCart, onRemoveFromCart, isInCart }) => {
  return (
    <div className="product-card">
      <img src="https://via.placeholder.com/450x300" alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      {isInCart ? (
        <button onClick={() => onRemoveFromCart(product.id)}>Remove from cart</button>
      ) : (
        <button onClick={() => onAddToCart(product.id)}>Add to cart</button>
      )}
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onRemoveFromCart: PropTypes.func.isRequired,
  isInCart: PropTypes.bool.isRequired,
};

export default ProductCard;