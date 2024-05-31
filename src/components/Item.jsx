import Card from "react-bootstrap/Card";

function Item({ product }) {
  return (
    <Card
      className="cardProduct"
      style={{ width: "18rem", background: "#E6E6E9" }}
    >
      <Card.Img className="imgcardProduct" variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.price}$</Card.Text>
        <span className="btnAddCart">AÑADIR AL CARRITO</span>
      </Card.Body>
    </Card>
  );
}

export default Item;
