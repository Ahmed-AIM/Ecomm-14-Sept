import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CartContext } from "../CartContext";


// and so on...

function ProductCard({ product }) {
  const { addToWishlist, addToCart } = useContext(CartContext); // Access addToWishlist

  const handleAddToWishlist = () => {
    addToWishlist(product); // Call the function with the product
  };

  return (
    <Card className="mb-4"> {/* Margin bottom for spacing */}
      <Card.Img variant="top" src={product.image} alt={product.name} style={{ height: "15rem", objectFit: "cover" }} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.description} <br />
          {product.price} EGP
        </Card.Text>
        <div className="d-flex justify-content-between">
          <Button variant="primary" onClick={() => addToCart(product)}>Add to cart</Button>
          <Button variant="primary" onClick={handleAddToWishlist}>Add to Wishlist</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
