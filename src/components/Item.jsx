import Card from "react-bootstrap/Card";

function Item() {
  return (
    <Card
      className="cardProduct"
      style={{ width: "18rem", background: "#E6E6E9" }}
    >
      <Card.Img variant="top" src="./img/caritanordica.png" />
      <Card.Body>
        <Card.Title>Maceta Carita Nórdica</Card.Title>
        <Card.Text>500$</Card.Text>
        <span className="btnAddCart">AÑADIR AL CARRITO</span>
      </Card.Body>
    </Card>
  );
}

export default Item;
