import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ShoppingCart from "./ShoppingCart";

function NavBar() {
  return (
    <Navbar expand="lg" className="nav">
      <Container>
        <Navbar.Brand>
          <img className="logo" src="./public/img/logoArt.jpg" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="menuNav" href="#home">
              Tienda
            </Nav.Link>
            <Nav.Link className="menuNav" href="#about">
              Sobre Nosotros
            </Nav.Link>
            <Nav.Link className="menuNav" href="#contact">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <ShoppingCart />
      </Container>
    </Navbar>
  );
}

export default NavBar;
