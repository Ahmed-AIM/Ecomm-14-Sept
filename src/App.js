import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { CartProvider } from "./CartContext";
import CustomNavbar from "./components/CustomNavbar";
import CartPage from "./pages/CartPage";
import ProductList from "./pages/ProductList";
import WishlistPage from "./pages/WishlistPage";
import Login from "./components/Login"; // Import the Login component
import Register from "./components/Register"; // Import the Register component
import { useState, useEffect } from "react"; // Add useEffect import
import { useLocation } from "react-router-dom"; // Import useLocation here

function App() {
  const [username, setUsername] = useState(() => {
    // Load username from localStorage if available
    return localStorage.getItem('username') || null;
  });

  useEffect(() => {
    // Save username to localStorage whenever it changes
    if (username) {
      localStorage.setItem('username', username);
    } else {
      localStorage.removeItem('username');
    }
  }, [username]);

  return (
    <CartProvider>
      <Router>
        <InnerApp username={username} setUsername={setUsername} />
      </Router>
    </CartProvider>
  );
}

function InnerApp({ username, setUsername }) {
  const location = useLocation(); // Use useLocation here

  return (
    <div>
      {/* Conditionally render the navbar based on the current route */}
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <CustomNavbar username={username} setUsername={setUsername} />
      )}
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="wishlist" element={<WishlistPage />} />
        <Route path="/login" element={<Login setUsername={setUsername} />} />
        <Route path="/Register" element={<Register setUsername={setUsername} />} /> {/* Ensure this route is defined */}
      </Routes>
    </div>
  );
}

export default App;
