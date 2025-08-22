import React, { useState } from "react";
import { Card, Form, Button, Row, Col } from "react-bootstrap";
import { StarFill, Star } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

const ReviewForm = () => {
  const [rating, setRating] = useState(4);
  const [recommended, setRecommended] = useState(true);
  const [comment, setComment] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      rating,
      recommended,
      comment,
    });
    alert("Avaliação enviada!");
    navigate(-1); // volta para página anterior
  };

  return (
    <div className="container my-5" style={{ maxWidth: "800px" }}>
      <Card className="p-4 border-0 shadow-sm">
        <Row>
          <Col md={3} className="d-flex align-items-start">
            <img
              src="https://via.placeholder.com/150"
              alt="Produto"
              className="img-fluid rounded"
            />
          </Col>
          <Col md={9}>
            <h5 className="fw-bold text-uppercase mb-3">Avaliar Produto</h5>

            {/* Nota */}
            <div className="mb-3">
              <p className="mb-1">Nota de 1 a 5</p>
              <div style={{ color: "#ffc107" }}>
                {[1, 2, 3, 4, 5].map((num) =>
                  num <= rating ? (
                    <StarFill
                      key={num}
                      onClick={() => setRating(num)}
                      style={{ cursor: "pointer" }}
                      className="me-1"
                    />
                  ) : (
                    <Star
                      key={num}
                      onClick={() => setRating(num)}
                      style={{ cursor: "pointer" }}
                      className="me-1"
                    />
                  )
                )}
              </div>
              <span className="ms-1">{rating >= 4 ? "Bom" : "Regular"}</span>
            </div>

            {/* Recomenda */}
            <Form.Group className="mb-3">
              <Form.Label>Você recomendaria este produto?</Form.Label>
              <div>
                <Form.Check
                  inline
                  label="Sim"
                  type="radio"
                  name="recommended"
                  checked={recommended === true}
                  onChange={() => setRecommended(true)}
                />
                <Form.Check
                  inline
                  label="Não"
                  type="radio"
                  name="recommended"
                  checked={recommended === false}
                  onChange={() => setRecommended(false)}
                />
              </div>
            </Form.Group>

            {/* Comentário */}
            <Form.Group className="mb-3">
              <Form.Label>Escreva seu comentário</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Digite sua opinião sobre o produto..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </Form.Group>

            {/* Upload */}
            <p className="text-primary" style={{ cursor: "pointer" }}>
              + inserir foto ou vídeo do produto
            </p>

            {/* Botões */}
            <div className="d-flex justify-content-end gap-2">
              <Button
                variant="danger"
                onClick={() => navigate(-1)}
                style={{ minWidth: "120px" }}
              >
                Cancelar
              </Button>
              <Button
                variant="primary"
                onClick={handleSubmit}
                style={{ minWidth: "120px", backgroundColor: "#1c0cf0" }}
              >
                Enviar
              </Button>
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ReviewForm;
