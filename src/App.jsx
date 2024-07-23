import { NavLink, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import WhisList from "./pages/WhisList";
import ProductDetails from "./pages/ProductDetails";
const getActiveStyle = ({ isActive }) => ({
  margin: "1rem 0",
  color: isActive ? "red" : "",
  fontWeight: isActive ? "700" : "200",
  padding: isActive ? "1rem" : "0.5rem",
});
export default function App() {
  return (
    <>
      <nav>
        <NavLink style={getActiveStyle} to="/">
          Home
        </NavLink>
        ||
        <NavLink style={getActiveStyle} to="/category">
          Category
        </NavLink>
        ||
        <NavLink style={getActiveStyle} to="/cart">
          Cart
        </NavLink>
        ||
        <NavLink style={getActiveStyle} to="/whislist">
          Whislist
        </NavLink>
        ||
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/whislist" element={<WhisList />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
    </>
  );
}
