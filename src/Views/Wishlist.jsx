import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import { StoreContext } from "../context/StoreProvider";

export default function Wishlist() {
  const { wishlist } = useContext(StoreContext);

  return (
    <Container className="py-4">
      <h2 style={{ fontWeight: "bold", textTransform: "uppercase", marginBottom: "1rem" }}>
        Lista de Desejos
      </h2>
      <p>{wishlist.length} {wishlist.length === 1 ? "produto" : "produtos"}</p>

      <hr className="my-4" />

      <Row className="g-4">
        {wishlist.map((prod, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <ProductCard
              variant="wishlist"
              id={index}
              image={prod.img}
              title={prod.name}
              price={prod.price}
              product={prod}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
