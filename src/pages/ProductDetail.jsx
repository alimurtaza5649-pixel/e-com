import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import "../NewArrivalProducts/NewArrivalProducts.css";

const ProductDetail = () => {
  const { id } = useParams();
  const product = useProducts().find((item) => String(item.id) === id);
  const [showPayment, setShowPayment] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [paymentData, setPaymentData] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  const [orderStatus, setOrderStatus] = useState("");

  if (!product) {
    return (
      <div className="detail-card">
        <h2>Product not found</h2>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  const handlePaymentChange = (event) => {
    const { name, value } = event.target;
    setPaymentData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBuyNow = () => {
    setShowPayment(true);
    setOrderStatus("");
  };

  const handlePaymentSubmit = (event) => {
    event.preventDefault();
    setOrderStatus("Payment completed successfully! Your order is placed.");
  };

  const handleAddToCart = () => {
    setOrderStatus(`Added ${quantity} item${quantity > 1 ? "s" : ""} to cart. You can complete payment when ready.`);
  };

  return (
    <div className="detail-card">
      <div className="detail-header">
        <h2>{product.title}</h2>
        <Link to="/" className="detail-close">
          Back Home
        </Link>
      </div>
      <div className="detail-body">
        <img src={product.image} alt={product.title} />
        <div className="detail-info">
          <p>{product.description}</p>
          <div className="detail-prices">
            {product.price && <span className="detail-price">{product.price}</span>}
            {product.originalPrice && <span className="detail-original">{product.originalPrice}</span>}
            {product.discount && <span className="detail-discount">{product.discount}</span>}
          </div>
          <div className="quantity-row">
            <label>Quantity</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(event) => setQuantity(Math.max(1, Number(event.target.value)))}
            />
          </div>
          <div className="detail-rating">Rating: {product.rating}/5</div>
          <div className="detail-actions">
            <button className="detail-add" type="button" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="detail-buy" type="button" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
          {showPayment && (
            <form className="payment-form" onSubmit={handlePaymentSubmit}>
              <h3>Pay with Card</h3>
              <label>
                Name on Card
                <input
                  type="text"
                  name="name"
                  value={paymentData.name}
                  onChange={handlePaymentChange}
                  required
                />
              </label>
              <label>
                Card Number
                <input
                  type="text"
                  name="cardNumber"
                  value={paymentData.cardNumber}
                  onChange={handlePaymentChange}
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </label>
              <div className="payment-row">
                <label>
                  Expiry
                  <input
                    type="text"
                    name="expiry"
                    value={paymentData.expiry}
                    onChange={handlePaymentChange}
                    placeholder="MM/YY"
                    required
                  />
                </label>
                <label>
                  CVV
                  <input
                    type="text"
                    name="cvv"
                    value={paymentData.cvv}
                    onChange={handlePaymentChange}
                    placeholder="123"
                    required
                  />
                </label>
              </div>
              <button className="payment-submit" type="submit">
                Complete Payment
              </button>
            </form>
          )}
          {orderStatus && <div className="order-status">{orderStatus}</div>}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
