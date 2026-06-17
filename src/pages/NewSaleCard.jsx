import "../NewArrivalProducts/NewArrivalProducts.css";
import "./Sale.css";
import useProducts from "../hooks/useProducts.js";
import SaleCard from "./SaleCard.js";

const Sale = () => {
  const products = useProducts().filter((product) => product.discount);

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>TOP SELLING</h1>
      <div className="pro-container">
        {products.map((product) => (
          <SaleCard key={product.id} product={product} />
        ))}
      </div>

      <div className="view-all">
        <h2>View All</h2>
      </div>
    </>
  );
};

export default Sale;
