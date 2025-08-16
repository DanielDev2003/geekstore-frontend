import React, { useContext } from "react";
import { Container, Form, InputGroup, Button, Nav } from "react-bootstrap";
import { FaHeart, FaUserCircle, FaShoppingCart, FaSearch } from "react-icons/fa";
import logo from "../assets/logo.png";
import { StoreContext } from "../context/StoreProvider";
import { Link } from 'react-router-dom';

export default function Header() {
  const { wishlist, cart } = useContext(StoreContext);

  return (
    <header>
      <div style={{ backgroundColor: "#1500A3", padding: "10px 0" }}>
        <Container fluid className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <div className="d-flex align-items-center">
                <img src={logo} alt="GeekStore" style={{ height: "48px", marginRight: "10px" }} />
                <span style={{ color: "#fff", fontWeight: "bold", fontSize: "18px" }}>GEEKSTORE</span>
              </div>
            </Link>
          </div>

          <InputGroup style={{ maxWidth: "600px" }}>
            <Form.Control
              placeholder="O QUE VOCÊ ESTÁ PROCURANDO?"
              style={{ borderRadius: "20px 0 0 20px", fontSize: "14px", fontWeight: "bold" }}
            />
            <Button
              style={{
                borderRadius: "0 20px 20px 0",
                backgroundColor: "#fff",
                border: "none",
              }}
            >
              <FaSearch style={{ color: "#1500A3" }} />
            </Button>
          </InputGroup>

          <div className="d-flex align-items-center gap-3">
            <a href="/lista-de-desejos/">
              <div style={{ position: "relative", cursor: "pointer" }}>
                <FaHeart color="#fff" size={20} />
                {wishlist.length > 0 && (
                  <span
                    style={{
                      position: "absolute",
                      top: "-5px",
                      right: "-10px",
                      backgroundColor: "#FF0000",
                      color: "#fff",
                      borderRadius: "50%",
                      padding: "2px 6px",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    {wishlist.length}
                  </span>
                )}
              </div>
            </a>

            <FaUserCircle color="#fff" size={22} style={{ cursor: "pointer" }} />

            <a href="/carrinho">
                <div style={{ position: "relative", cursor: "pointer" }}>
                <FaShoppingCart color="#fff" size={22} />
                {cart.length > 0 && (
                    <span
                    style={{
                        position: "absolute",
                        top: "-5px",
                        right: "-10px",
                        backgroundColor: "#FF0000",
                        color: "#fff",
                        borderRadius: "50%",
                        padding: "2px 6px",
                        fontSize: "12px",
                        fontWeight: "bold",
                    }}
                    >
                    {cart.length}
                    </span>
                )}
                </div>
            </a>
          </div>
        </Container>
      </div>

      <div style={{ backgroundColor: "#0094B9" }}>
        <Container>
          <Nav className="gap-4">
            <Nav.Link href="#" style={{ color: "#fff" }}>Animes</Nav.Link>
            <Nav.Link href="#" style={{ color: "#fff" }}>Acessorios</Nav.Link>
          </Nav>
        </Container>
      </div>
    </header>
  );
}
