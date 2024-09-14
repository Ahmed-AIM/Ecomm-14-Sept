import React, { useContext } from 'react';
import { CartContext } from '../CartContext'; // Import CartContext
import Button from 'react-bootstrap/Button'; // Import Button from React Bootstrap
import ListGroup from 'react-bootstrap/ListGroup'; // Import ListGroup for better styling
import Card from 'react-bootstrap/Card'; // Import Card for better styling
import Container from 'react-bootstrap/Container'; // Import Container for better styling
import Stack from 'react-bootstrap/Stack'; // Import Stack for better styling



const WishlistPage = () => {
  const { wishlist, removeFromWishlist, addToCart } = useContext(CartContext); // Access wishlist, removeFromWishlist, and addToCart

  return (
    <div >
      <h1>Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p> // Message for empty wishlist
      ) : (
        <Container className="my-5">
        <Stack gap={3}>
        <ListGroup>
          {wishlist.map((product) => (
            <ListGroup.Item key={product.id} className="d-flex justify-content-between align-items-center">
              <div>
              <Card.Img class="hover-image" variant="top" src={product.image} style={{ width: '120px', height: '80px'}} />

                <h2 >{product.name}</h2> 
                <p>{product.description}</p> 
                <p>Price: {product.price}  EGP</p> 
                <Button variant="primary" onClick={() => addToCart(product)}>
                  Add to Cart
                </Button>
              </div>
              <Button variant="outline-danger" onClick={() => removeFromWishlist(product)}>
                Remove from Wishlist
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
        </Stack>
        </Container>
      )}
    </div>
  );
};

export default WishlistPage; // Default export
