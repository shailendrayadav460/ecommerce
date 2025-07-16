import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';// 👈 Make sure to import the CSS

function Home2Card() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://6855017f6a6ef0ed6630de24.mockapi.io/store/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  // 🔁 Duplicate products for seamless loop
  const loopProducts = [...products, ...products];

  return (
    <div className="scroll-wrapper">
      <div className="scroll-track">
        {loopProducts.map((item, index) => (
          <Card className="home2Card" key={index}>
              <Card.Img className="imagecard" variant="top" src={item.image} />
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Home2Card;
