import React from "react";
import { Container, Form, InputGroup, Button, Nav } from "react-bootstrap";
import { FaHeart, FaUserCircle, FaShoppingCart, FaSearch } from "react-icons/fa";
import logo from "../assets/react.svg"
export default function Header() {
  return (
    <header>
      <div style={{ backgroundColor: "#1500A3", padding: "10px 0" }}>
        <Container fluid className="d-flex align-items-center justify-content-between">
            
          <div className="d-flex align-items-center">
            <img src={logo} alt="GeekStore" style={{ height: "40px", marginRight: "10px" }} />
            <span style={{ color: "#fff", fontWeight: "bold", fontSize: "18px" }}>GEEKSTORE</span>
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
            <FaHeart color="#fff" size={20} style={{ cursor: "pointer" }} />
            <FaUserCircle color="#fff" size={22} style={{ cursor: "pointer" }} />
            <FaShoppingCart color="#fff" size={22} style={{ cursor: "pointer" }} />
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
