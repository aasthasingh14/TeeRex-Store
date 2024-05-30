import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useLocation } from "react-router-dom";

function CustomNavbar({ cartItemCount, searchTerm, handleSearch }) {
  const location = useLocation();
  const showSearch = location.pathname !== "/cart";

  return (
    <>
      <style>
        {`
          .navbar {
            margin-bottom: 20px;
          }
          .navbar-brand {
            font-size: 2.5rem;
            font-family: 'Arial, sans-serif';  
            font-weight: bold; 
          }
          .search-form {
            width: 50%;
          }
          .cart-button {
            margin-left: 50px;
          }
          .badge {
            background-color: black;
            color: white;
            border-radius: 50%;
            padding: 5px 10px;
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(50%, -50%);
          }
        `}
      </style>
      <Navbar expand="lg" fixed="top" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#" className="navbar-brand">
            TeeRex Store
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            {showSearch && ( // Render search form only if showSearch is true
              <Form className="d-flex mx-auto search-form" style={{ width: "40%" }}>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  value={searchTerm}
                  onChange={handleSearch}
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            )}
            <Nav>
              <Nav.Link as={Link} to="/cart">
                <Button
                  variant="outline-primary"
                  className="d-flex align-items-center cart-button"
                >
                  <ShoppingCartIcon />
                  <span className="badge badge-light">{cartItemCount}</span>
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNavbar;
