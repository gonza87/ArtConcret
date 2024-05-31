import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import ShoppingCart from "./ShoppingCart";

function NavBar() {
  return (
    <Navbar expand="lg" className="nav">
      <Container>
        <Navbar.Brand>
          <img className="logo" src="/public/img/logoArt.jpg" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Dropdown>
              <Dropdown.Toggle
                className="menuNav"
                variant=""
                id="dropdown-basic"
              >
                Dropdown Button
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Link className="menuNav" to="/">
              Tienda
            </Link>
            <Link className="menuNav" to="/about">
              Sobre Nosotros
            </Link>
            <Link className="menuNav" to="/contact">
              Contacto
            </Link>
          </Nav>
        </Navbar.Collapse>
        <ShoppingCart />
      </Container>
    </Navbar>
  );
}

export default NavBar;
