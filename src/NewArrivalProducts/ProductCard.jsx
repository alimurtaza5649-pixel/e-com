import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="product-card-link">
      <div className="product">
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <div className="star">
          {Array.from({ length: product.stars }).map((_, i) => (
            <FaStar key={i} />
          ))}
          <span>{product.rating}/5</span>
        </div>
        <div className="price-section">
          {product.price && <div className="price">{product.price}</div>}
          {product.originalPrice && <div className="original-price">{product.originalPrice}</div>}
          {product.discount && <div className="discount-badge">{product.discount}</div>}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
