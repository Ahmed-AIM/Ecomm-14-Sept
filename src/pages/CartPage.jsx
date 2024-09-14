import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { CartContext } from "../CartContext";

// 1. create file js or jsx
// 2. function ComponentName
// 3. return <></>
// 4. export
function CartPage() {
  const { cart, removeFromCart, addToCart, decreaseQuantity } = useContext(CartContext);
  // cart => map
  // Calculate total price of the cart
  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  const handleCheckout = () => {
    // write the checkout code here 
    alert("Proceeding to checkout...");
  };

  return (
    <div className="container-fluid"> {/* Full-width responsiveness */}
      <h1 className="text-center">Your Cart</h1> {/* Centered heading */}
    <Container className="my-5"> {/* Added container for responsiveness */}
      
      {cart.length === 0 ? (
        <p>Your cart is empty.</p> 
      ) : (
        <Stack gap={3}>
          {cart.map((product, index) => (
            <Card key={index}>
              <Card.Body className="d-flex flex-column flex-md-row justify-content-between align-items-center"> {/* Responsive layout */}
                <Card.Img className="hover-image" variant="top" src={product.image} style={{ width: '120px', height: '80px' }} />
                <div className="flex-grow-1 mx-2"> {/* Flex-grow for responsive spacing */}
                  <h3>{product.name}</h3>
                  <div>Price: {product.price} EGP</div>
                </div>
                <div className="d-flex align-items-center">
                  <Button variant="secondary" onClick={() => addToCart(product)}>+</Button>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <input type="text" disabled value={`Qty :   ${product.quantity.toFixed(2)}`} style={{ width: '130px', margin: '0 10px' }} />
                  <input type="text" disabled value={`total :  ${(product.price * product.quantity).toFixed(2)}`} style={{ width: '130px', margin: '0 10px', marginTop: '5px' }} />
                </div>
                  <Button variant="secondary" onClick={() => decreaseQuantity(product)}>-</Button>
                  <Button variant="outline-danger" onClick={() => removeFromCart(product)}>Remove</Button>
                </div>
              </Card.Body>
            </Card>
          ))}
          {/* New field to display total price */}
          <div style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold' }}>
            Total Price: {totalPrice.toFixed(2)} EGP
          </div>
          <div>
            <Button variant="success" onClick={handleCheckout} style={{ marginTop: '20px' }}>
              Checkout
            </Button>
          </div>
        </Stack>
      )}
    </Container>
    </div>
  );
}
export default CartPage;
