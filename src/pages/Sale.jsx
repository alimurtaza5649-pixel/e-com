import { Link } from "react-router-dom";
import "../NewArrivalProducts/NewArrivalProducts.css";
import "./Sale.css";
import useSaleProducts from "../hooks/SaleCard.js";
import SaleCard from "./SaleCard.jsx";

const Sale = () => {
  const products = useSaleProducts();

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>TOP SELLING</h1>
      <div className="pro-container">
        {products.map((product) => (
          <SaleCard key={product.id} product={product} />
        ))}
      </div>

      <div className="view-all">
        <Link to="/sale">
          <h2>View All</h2>
        </Link>
      </div>
    </>
  );
};

export default Sale;
