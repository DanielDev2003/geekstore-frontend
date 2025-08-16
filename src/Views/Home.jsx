import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import ProductCard from "../components/ProductCard";

import categoriasData from "../data/categorias.json";
import produtosData from "../data/produtos.json";

export default function Home() {
  const [categorias, setCategorias] = useState([]);
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    setCategorias(categoriasData);
    setProdutos(produtosData);
  }, []);

  return (
    <Container fluid className="p-0">
      <Image
        src="/img/banner.jpg"
        alt="Banner GeekStore"
        fluid
        style={{ width: "100%", maxHeight: "350px", objectFit: "cover" }}
      />

      <Container className="my-4">
        <Row className="justify-content-center">
          {categorias.map((cat, index) => (
            <Col
              key={index}
              xs="auto"
              className="text-center m-2 p-3"
              style={{
                backgroundColor: "#1500A3",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              <Image
                src={cat.img}
                alt={cat.alt}
                style={{ width: "50px", height: "50px" }}
              />
            </Col>
          ))}
        </Row>
      </Container>

      <Container className="mb-5">
        <Row className="justify-content-center">
          {produtos.map((prod, index) => (
            <Col
              key={index}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="d-flex justify-content-center mb-4"
            >
              <ProductCard
                id={index}
                image={prod.img}
                title={prod.name}
                price={prod.price}
                variant="home"
                product={prod}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}
