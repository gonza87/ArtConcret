import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import ShoppingCart from "./ShoppingCart";

import categories from "../.././public/data/categories.json";

function NavBar() {
  return (
    <Navbar expand="lg" className="nav">
      <Container>
        <Navbar.Brand>
          <Link to={"/"}>
            <img className="logo" src="/public/img/logoArt.jpg" alt="logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Dropdown>
              <Dropdown.Toggle
                className="menuNav"
                style={{ backgroundColor: "#000000" }}
              >
                Tienda
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {categories.map((category) => {
                  return (
                    <Dropdown.Item
                      key={category.id}
                      as={Link}
                      to={`/category/${category.id}`}
                    >
                      {category.name}
                    </Dropdown.Item>
                  );
                })}
                {/* <Dropdown.Item as={Link} to="/category/macetas">
                  Action
                </Dropdown.Item> */}
              </Dropdown.Menu>
            </Dropdown>

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
