import React, { useContext } from 'react';
import { CartContext } from '../CartContext'; 
import Button from 'react-bootstrap/Button'; 
import ListGroup from 'react-bootstrap/ListGroup'; 
import Card from 'react-bootstrap/Card'; 
import Container from 'react-bootstrap/Container'; 
import Stack from 'react-bootstrap/Stack'; 



const WishlistPage = () => {
  const { wishlist, removeFromWishlist, addToCart } = useContext(CartContext); // Access wishlist, removeFromWishlist, and addToCart

  return (
    <div className="container-fluid"> {/* Full-width responsiveness */}
      <h1 className="text-center">Your Wishlist</h1> {/* Centered heading */}
      {wishlist.length === 0 ? (
        <p className="text-center">Your wishlist is empty.</p> // Centered message for empty wishlist
      ) : (
        <Container className="my-5">
          <Stack gap={3}>
            <ListGroup>
              {wishlist.map((product) => (
                <ListGroup.Item key={product.id} className="d-flex flex-column flex-md-row justify-content-between align-items-center"> {/* Responsive flex layout */}
                  <div className="w-100"> {/* Full width for product details */}
                    <Card.Img className="hover-image" variant="top" src={product.image} style={{ width: '100%', maxWidth: '120px', height: 'auto'}} /> {/* Responsive image */}
                    <h2>{product.name}</h2> 
                    <p>{product.description}</p> 
                    <p>Price: {product.price} EGP</p> 
                    <Button variant="primary" onClick={() => {
                      addToCart(product);
                      removeFromWishlist(product);
                    }}>
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
