import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div style={{ backgroundColor: "#0094B9", color: "#fff", padding: "40px 0" }}>
        <Container>
          <Row className="align-items-center">
            
            <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
              <h5 style={{ fontWeight: "bold" }}>REDE SOCIAIS</h5>
              <p className="mb-1">
                <FaInstagram style={{ marginRight: "8px" }} /> @otakuwearofc
              </p>
              <p>
                <FaPhoneAlt style={{ marginRight: "8px" }} /> (83) 98765-4321
              </p>
            </Col>

            <Col md={6} className="text-center text-md-start">
              <h5 style={{ fontWeight: "bold" }}>ENDEREÇO</h5>
              <p className="mb-1" style={{ fontWeight: "bold" }}>Rua Treze de Maio, 33</p>
              <p>Bairro Padre Ibiapina<br />Guarabira-PB</p>
              <img
                src="https://via.placeholder.com/250x150.png?text=Mapa"
                alt="Mapa"
                style={{
                  borderRadius: "15px",
                  marginTop: "10px",
                  maxWidth: "100%",
                  height: "auto"
                }}
              />
            </Col>
          </Row>
        </Container>
      </div>

      <div style={{ backgroundColor: "#000", color: "#fff", textAlign: "center", padding: "10px 0" }}>
        @otakuwear
      </div>
    </footer>
  );
}
