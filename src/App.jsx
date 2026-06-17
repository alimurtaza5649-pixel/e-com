import { Routes, Route } from "react-router-dom"
import NavBar from "./Components/NavBar/NavBar"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import NewArrivals from "./pages/NewArrivals"
import Sale from "./pages/Sale"
import Brand from "./pages/Brand"
import ProductDetail from "./pages/ProductDetail"
import SaleProductDetail from "./pages/SaleProductDetail"

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/sale-product/:id" element={<SaleProductDetail />} />
      </Routes>
    </>
  )
}

export default App
