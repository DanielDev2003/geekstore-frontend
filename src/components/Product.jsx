import React, { useState } from "react";
import { Card, Button, Form, Image, Row, Col } from "react-bootstrap";
import { CreditCard, StarFill, Star } from "react-bootstrap-icons";

const StarRating = ({ rating }) => {
  const totalStars = 5;
  const roundedRating = Math.round(rating);
  return (
    <div className="d-flex" style={{ color: "#ffc107" }}>
      {[...Array(totalStars)].map((_, index) =>
        index < roundedRating ? (
          <StarFill key={index} className="me-1" />
        ) : (
          <Star key={index} className="me-1" />
        )
      )}
    </div>
  );
};

export default function Product({ product }) {
  const [quantity, setQuantity] = useState(1);

  if (!product) return <p>Carregando produto...</p>;

  const addToWishlist = (product) => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const exists = wishlist.find((p) => p.id === product.id);
    if (!exists) {
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      alert("Produto adicionado à lista de desejos!");
  
      window.dispatchEvent(new Event("wishlistChanged"));
    } else {
      alert("Produto já está na lista de desejos.");
    }
  };

  return (
    <div className="p-4">
      <Row className="g-4">
        {/* Coluna esquerda */}
        <Col md={8}>
          <Card
            className="p-4 h-100"
            style={{ backgroundColor: "#e0dee7", border: "none", borderRadius: "12px" }}
          >
            <Row className="g-0">
              <Col md={5} className="d-flex align-items-start">
                <Image src={product?.img} fluid rounded />
              </Col>
              <Col md={7} className="d-flex flex-column justify-content-start ps-3">
                <h5
                  style={{
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    marginBottom: "0.5rem",
                  }}
                >
                  {product?.name}
                </h5>
                <p style={{ fontSize: "1.1rem", lineHeight: "1.5" }}>
                  {product?.description}
                </p>
              </Col>
            </Row>
          </Card>
        </Col>

        {/* Coluna direita */}
        <Col md={4}>
          <Card
            className="p-4 h-100"
            style={{ backgroundColor: "#e0dee7", border: "none", borderRadius: "12px" }}
          >
            <h4 style={{ fontWeight: "bold" }}>R$ {product?.price}</h4>
            <small className="d-block text-muted mb-3">à vista</small>

            {product?.installments && (
              <div className="d-flex align-items-center mb-4">
                <CreditCard size={20} className="me-2" />
                <small>{product.installments}</small>
              </div>
            )}

            <Form.Group className="d-flex justify-content-between align-items-center mb-4">
              <Form.Label className="mb-0">
                <strong>Quantidade</strong>
              </Form.Label>
              <Form.Select
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                style={{ width: "80px" }}
              >
                {[1, 2, 3, 4, 5].map((q) => (
                  <option key={q} value={q}>
                    {q}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Button
              className="w-100 mb-2 py-2"
              style={{
                backgroundColor: "#4b29ff",
                border: "none",
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              Adicionar ao carrinho
            </Button>

            <Button
              className="w-100 py-2"
              style={{
                backgroundColor: "#00bcd4",
                border: "none",
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
              onClick={() => addToWishlist(product)}
            >
              Adicionar à lista de desejos
            </Button>
          </Card>
        </Col>
      </Row>

      {/* Linha de Divisão */}
      <hr className="my-4" />

      {/* Bloco de avaliações */}
      <div className="mt-4">
        <h5 style={{ fontWeight: "bold", textTransform: "uppercase" }}>AVALIAÇÕES</h5>
        <div className="mb-3">
          <StarRating
            rating={
              product?.reviews?.length > 0
                ? product.reviews.reduce((acc, r) => acc + r.rating, 0) /
                  product.reviews.length
                : 0
            }
          />
        </div>

        <Card style={{ backgroundColor: "#e0dee7", border: "none", borderRadius: "12px" }} className="p-3">
          {!product?.reviews || product.reviews.length === 0 ? (
            <p className="m-2 text-center">Nenhuma avaliação ainda.</p>
          ) : (
            product.reviews.map((r, idx) => (
              <Card key={idx} className="p-3 border-0 mb-2">
                <StarRating rating={r.rating} />
                <p className="mt-2 mb-1">{r.comment}</p>
                <p className="mb-1">
                  <strong>{r.user}</strong>
                </p>
                <p className="mb-0">
                  Recomendaria? <strong>{r.recommended}</strong>
                </p>
              </Card>
            ))
          )}
        </Card>
      </div>
    </div>
  );
}
