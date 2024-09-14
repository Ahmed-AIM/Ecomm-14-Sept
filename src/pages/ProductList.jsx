import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ProductCard from "../components/ProductCard";

const productList = [
  {
    "id": "1u6r",
    "name": "Elegant Desk Lamp",
    "description": "A stylish desk lamp with adjustable lighting.",
    "price": 45.99,
    "image": "/img/1.jpg", // Updated path for public folder
    "category": "Home Decor",
    "rating": 4.5
  },
  {
    "id": "2a9g",
    "name": "Bluetooth Headphones",
    "description": "Noise-cancelling over-ear headphones with high-fidelity sound.",
    "price": 89.99,
    "image": "/img/2.jpg",
    "category": "Electronics",
    "rating": 4.7
  },
  {
    "id": "3w5x",
    "name": "Organic Green Tea",
    "description": "A refreshing and healthy organic green tea.",
    "price": 15.5,
    "image": "/img/3.jpg",
    "category": "Beverages",
    "rating": 4.3
  },
  {
    "id": "4ve2",
    "name": "Running Shoes",
    "description": "Lightweight and durable running shoes for everyday athletes.",
    "price": 120,
    "image": "/img/4.jpg",
    "category": "Sportswear",
    "rating": 4.6
  },
  {
    "id": "5t0q",
    "name": "Smartwatch",
    "description": "A sleek smartwatch with fitness tracking capabilities.",
    "price": 199.99,
    "image": "/img/5.jpg",
    "category": "Wearables",
    "rating": 4.4
  },
  {
    "id": "6l8i",
    "name": "Leather Wallet",
    "description": "A premium leather wallet with multiple card slots.",
    "price": 49.99,
    "image": "/img/6.jpg",
    "category": "Accessories",
    "rating": 4.8
  },
  {
    "id": "7b9o",
    "name": "Ceramic Dinner Set",
    "description": "A 16-piece ceramic dinner set with elegant design.",
    "price": 70,
    "image": "/img/7.jpg",
    "category": "Kitchenware",
    "rating": 4.2
  },
  {
    "id": "8g7n",
    "name": "Yoga Mat",
    "description": "Eco-friendly yoga mat with non-slip surface.",
    "price": 35,
    "image": "/img/8.jpg",
    "category": "Fitness",
    "rating": 4
  },
  {
    "id": "n8w2",
    "name": "Gaming Mouse",
    "description": "High-precision gaming mouse with customizable buttons.",
    "price": 59.99,
    "image": "/img/9.jpg",
    "category": "Gaming",
    "rating": 4.5
  },
  {
    "id": "c2ab",
    "name": "Waterproof Backpack",
    "description": "A waterproof backpack suitable for travel and outdoor activities.",
    "price": 80,
      "image": "/img/10.jpg",
    "category": "Travel Gear",
    "rating": 4.7
  },
  {
    "id": "11xy",
    "name": "Wireless Charger",
    "description": "Fast wireless charger for all Qi-enabled devices.",
    "price": 29.99,
      "image": "/img/11.jpg",
    "category": "Electronics",
    "rating": 4.6
  },
  {
    "id": "12ab",
    "name": "Stainless Steel Water Bottle",
    "description": "Insulated water bottle keeps drinks cold for 24 hours.",
    "price": 25.99,
    "image": "/img/12.jpg",
    "category": "Accessories",
    "rating": 4.8
  },
  {
    "id": "13cd",
    "name": "Portable Bluetooth Speaker",
    "description": "Compact speaker with powerful sound and long battery life.",
    "price": 49.99,
    "image": "/img/13.jpg",
    "category": "Electronics",
    "rating": 4.7
  },
  {
    "id": "14ef",
    "name": "Electric Kettle",
    "description": "Quick-boil electric kettle with auto shut-off.",
    "price": 39.99,
    "image": "/img/14.jpg",
    "category": "Kitchenware",
    "rating": 4.5
  },
  {
    "id": "15gh",
    "name": "Fitness Tracker",
    "description": "Waterproof fitness tracker with heart rate monitor.",
    "price": 59.99,
    "image": "/img/15.jpg",
    "category": "Wearables",
    "rating": 4.4
  },
  {
    "id": "16ij",
    "name": "Digital Picture Frame",
    "description": "High-resolution digital frame with slideshow feature.",
    "price": 79.99,
    "image": "/img/16.jpg",
    "category": "Home Decor",
    "rating": 4.6
  },
  {
    "id": "17kl",
    "name": "Electric Toothbrush",
    "description": "Rechargeable toothbrush with multiple brushing modes.",
    "price": 89.99,
    "image": "/img/17.jpg",
    "category": "Personal Care",
    "rating": 4.7
  },
  {
    "id": "18mn",
    "name": "Noise-Cancelling Earbuds",
    "description": "Wireless earbuds with active noise cancellation.",
    "price": 129.99,
    "image": "/img/18.jpg",
    "category": "Electronics",
    "rating": 4.5
  },
  {
    "id": "19op",
    "name": "Smart Light Bulb",
    "description": "Wi-Fi enabled light bulb with color-changing feature.",
    "price": 19.99,
      "image": "/img/19.jpg",
    "category": "Home Decor",
    "rating": 4.3
  },
  {
    "id": "20qr",
    "name": "Air Purifier",
    "description": "HEPA air purifier with quiet operation.",
    "price": 149.99,
    "image": "/img/20.jpg",
    "category": "Home Appliances",
    "rating": 4.6
  },
  {
    "id": "21st",
    "name": "Laptop Stand",
    "description": "Adjustable laptop stand for ergonomic use.",
    "price": 34.99,
      "image": "/img/21.jpg",
    "category": "Office Supplies",
    "rating": 4.5
  },
  {
    "id": "22uv",
    "name": "Electric Grill",
    "description": "Indoor electric grill with non-stick surface.",
    "price": 99.99,
      "image": "/img/22.jpg",
    "category": "Kitchenware",
    "rating": 4.7
  },
  {
    "id": "23wx",
    "name": "Smart Thermostat",
    "description": "Wi-Fi enabled thermostat with remote control.",
    "price": 199.99,
      "image": "/img/23.jpg",
    "category": "Home Appliances",
    "rating": 4.8
  },
  {
    "id": "24yz",
    "name": "Robot Vacuum Cleaner",
    "description": "Automatic vacuum cleaner with smart navigation.",
    "price": 299.99,
      "image": "/img/24.jpg",
    "category": "Home Appliances",
    "rating": 4.6
  },
  {
    "id": "25ab",
    "name": "Wireless Keyboard",
    "description": "Compact wireless keyboard with long battery life.",
    "price": 49.99,
      "image": "/img/25.jpg",
    "category": "Electronics",
    "rating": 4.4
  },
  {
    "id": "26cd",
    "name": "Electric Shaver",
    "description": "Rechargeable shaver with precision blades.",
    "price": 69.99,
    "image": "/img/26.jpg",
    "category": "Personal Care",
    "rating": 4.5
  },
  {
    "id": "27ef",
    "name": "Smart Doorbell",
    "description": "Wi-Fi doorbell with video and motion detection.",
    "price": 149.99,
    "image": "/img/27.jpg",
    "category": "Home Security",
    "rating": 4.7
  },
  {
    "id": "28gh",
    "name": "Portable Projector",
    "description": "Mini projector with HD resolution and built-in speakers.",
    "price": 199.99,
    "image": "/img/28.jpg",
    "category": "Electronics",
    "rating": 4.6
  },
  {
    "id": "29ij",
    "name": "Electric Blanket",
    "description": "Heated blanket with adjustable temperature settings.",
    "price": 79.99,
    "image": "/img/29.jpg",
    "category": "Home Comfort",
    "rating": 4.5
  },
  {
    "id": "30kl",
    "name": "Smart Plug",
    "description": "Wi-Fi smart plug with voice control compatibility.",
    "price": 24.99,
    "image": "/img/30.jpg",
    "category": "Home Automation",
    "rating": 4.4
  },
  {
    "name": "Galaxy Z Flip 4",
    "description": "The more compact Galaxy Z Flip4 has a bigger battery, a faster processor, and a tougher design than its predecessor.",
    "price": 31499,
    "image":
      "/img/31.jpg",
      
    
    "category": "Smartphones",
    "rating": 5,
    "id": "dabf"
  }
];
function ProductList() {
  return (
    <Container className="my-5">
      <Row xs={1} md={2} lg={3} className="g-4">
        {productList.map((item, idx) => (
          <Col key={idx}>
            <ProductCard product={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductList;
