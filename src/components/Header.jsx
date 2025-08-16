import React, { useState, useEffect } from "react";
import { Container, Form, InputGroup, Button, Nav } from "react-bootstrap";
import { FaHeart, FaUserCircle, FaShoppingCart, FaSearch } from "react-icons/fa";
import logo from "../assets/react.svg";

export default function Header() {
  const [wishlistCount, setWishlistCount] = useState(0);

  const updateWishlistCount = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistCount(wishlist.length);
  };

  useEffect(() => {
    updateWishlistCount();

    const handleWishlistChange = () => updateWishlistCount();
    window.addEventListener("wishlistChanged", handleWishlistChange);

    return () => {
      window.removeEventListener("wishlistChanged", handleWishlistChange);
    };
  }, []);

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

          <a href="/lista-de-desejos/">
            <div className="d-flex align-items-center gap-3">
              <div style={{ position: "relative", cursor: "pointer" }}>
                <FaHeart color="#fff" size={20} />
                {wishlistCount > 0 && (
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
                    {wishlistCount}
                  </span>
                )}
              </div>

              <FaUserCircle color="#fff" size={22} style={{ cursor: "pointer" }} />
              <FaShoppingCart color="#fff" size={22} style={{ cursor: "pointer" }} />
            </div>
          </a>
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
