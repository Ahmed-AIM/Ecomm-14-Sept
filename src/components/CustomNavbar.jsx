import { useContext } from "react";
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";

function CustomNavbar({ username, setUsername }) { // Accept username and setUsername as props
  const { cart, wishlist = [] } = useContext(CartContext); // Default to empty array
  // Remove local state for username and use the prop directly
  const handleLogout = () => {
    setUsername(null); // Clear username on logout
  };
  const Message =  `Welcome, ${username}!`; // Use the prop directly
  return (
    <Navbar bg="dark" data-bs-theme="dark" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src="./img/pngwing.png" alt="My Logo" style={{ width: '60px' }} />
          Ecommerce
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="wishlist">Wishlist <Badge bg="danger">{wishlist.length}</Badge></Nav.Link>
          <Nav.Link as={Link} to="cart">Cart <Badge bg="warning" text="dark">{cart.length}</Badge></Nav.Link>
          {/* Conditionally render the Login link based on username */}
          {!username && <Nav.Link as={Link} to="login">Login</Nav.Link>} {/* Add Login link only if not logged in */}
        </Nav>
        {/* Display username and logout button */}
        {username ? ( // Use the username prop directly
          <div>
            <span className="text-white me-2">{Message}</span>
            <button onClick={handleLogout} className="btn btn-outline-light">Logout</button>
          </div>
         ) : null} 
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
