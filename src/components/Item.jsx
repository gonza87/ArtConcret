import React, { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../context/CartContext";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Item({ product }) {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  return (
    <Card
      className="cardProduct"
      style={{ width: "18rem", background: "#E6E6E9" }}
    >
      <Link to={`/item/${product.id}`}>
        <Card.Img
          className="imgcardProduct"
          variant="top"
          src={product.image}
        />
      </Link>

      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.price}$</Card.Text>
        <span
          className="btnAddCart"
          onClick={() => {
            addToCart(product, quantity);
          }}
        >
          AÑADIR AL CARRITO
        </span>
      </Card.Body>
    </Card>
  );
}

export default Item;
