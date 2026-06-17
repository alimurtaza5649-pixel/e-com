import { Link } from "react-router-dom";

const Brand = () => {
  return (
    <div style={{ maxWidth: 900, margin: "2rem auto", padding: "1.5rem" }}>
      <h1>Brands</h1>
      <p>Discover top brands and collections. Brand pages are coming soon.</p>
      <Link to="/" style={{ color: "#1890ff", textDecoration: "none" }}>
        Back to Home
      </Link>
    </div>
  );
};

export default Brand;
