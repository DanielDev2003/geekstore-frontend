import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import Product from "../components/Product";
import productData from "../data/produtos.json";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const idx = Number(id);
      setProduct(productData[idx]);
  }, [id]);

  if (!product) {
    return (
      <Container className="p-4">
        <h2>Produto não encontrado.</h2>
      </Container>
    );
  }

  return (
    <Container className="p-4">
      <Product product={product} />
    </Container>
  );
}
