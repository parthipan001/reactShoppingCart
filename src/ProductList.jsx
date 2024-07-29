
import ProductCard from './ProductCard';
import PropTypes from 'prop-types';

const ProductList = ({ products, onAddToCart, onRemoveFromCart, cartItems }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onRemoveFromCart={onRemoveFromCart}
          isInCart={cartItems.includes(product.id)}
        />
      ))}
    </div>
  );
}

ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })).isRequired,
    onAddToCart: PropTypes.func.isRequired,
    onRemoveFromCart: PropTypes.func.isRequired,
    cartItems: PropTypes.arrayOf(PropTypes.number).isRequired,
  };

export default ProductList;