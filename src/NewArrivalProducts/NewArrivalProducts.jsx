import { Link } from "react-router-dom";
import "./NewArrivalProducts.css"
import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";

// es6  jdjkfkd
// spread Method,Destructuring,Map Method,1. Block-Scoped Declarations (let and const),Arrow Function,Template Literals
const NewArrivalProducts = () => {
  const products = useProducts();

  return (
    <>
      <h1 style={{textAlign: "center", marginTop: "20px"}}>NEW ARRIVALS</h1>
      <div className="pro-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="view-all">
        <Link to="/new-arrivals"><h2>View All</h2></Link>
      </div>
    </>
  )
}

export default NewArrivalProducts
