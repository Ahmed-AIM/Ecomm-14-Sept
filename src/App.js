import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { CartProvider } from "./CartContext";
import CustomNavbar from "./components/CustomNavbar";
import CartPage from "./pages/CartPage";
import ProductList from "./pages/ProductList";
import WishlistPage from "./pages/WishlistPage";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div>
          <CustomNavbar />

          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="wishlist" element={<WishlistPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
