import React, { useContext } from "react";
import { StoreContext } from "../context/StoreProvider";

export default function Carrinho() {
  const { cart, removeFromCart, updateQty } = useContext(StoreContext);

  const frete = 15.6;
  const desconto = 10.49;

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );
  const total = subtotal + frete - desconto;

  return (
    <div className="container my-4">
      <h2 className="fw-bold">SEU CARRINHO</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          className="d-flex align-items-center bg-light p-3 rounded mb-3"
        >
          <img
            src={item.img}
            alt={item.name}
            style={{
              width: "90px",
              height: "90px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
            className="me-3"
          />
          <div className="flex-grow-1">
            <h6 className="fw-bold">{item.name}</h6>
            <small>Cor: {item.color}</small>
            <br />
            <small>Tamanho: {item.size}</small>
            <br />
            <small>Material: {item.material}</small>
            <br />
            <span className="text-primary fw-bold">
              Valor: R$ {item.price.toFixed(2).replace(".", ",")}
            </span>
            <br />
            <button
              className="btn btn-link p-0 text-muted small"
              onClick={() => removeFromCart(item.id)}
            >
              Remover
            </button>
          </div>

          <div className="d-flex align-items-center">
            <button
              className="btn btn-outline-secondary btn-sm"
              onClick={() => updateQty(item.id, (item.quantity || 1) - 1)}
            >
              -
            </button>
            <span className="mx-2">{item.quantity || 1}</span>
            <button
              className="btn btn-outline-secondary btn-sm"
              onClick={() => updateQty(item.id, (item.quantity || 1) + 1)}
            >
              +
            </button>
          </div>
        </div>
      ))}

      <div className="d-flex align-items-center mt-4">
        <label className="me-2 fw-bold">CEP:</label>
        <input
          type="text"
          defaultValue="58240-000"
          className="form-control form-control-sm me-2"
          style={{ width: "120px" }}
        />
        <button className="btn btn-info btn-sm text-white">BUSCAR</button>
      </div>

      <div className="mt-4 text-end">
        <p>Valor Itens: R$ {subtotal.toFixed(2).replace(".", ",")}</p>
        <p>Frete: R$ {frete.toFixed(2).replace(".", ",")}</p>
        <p>Desconto: -R$ {desconto.toFixed(2).replace(".", ",")}</p>
        <button className="btn btn-link p-0 text-decoration-none">
          Inserir Cupom
        </button>
        <h5 className="fw-bold mt-2">
          Valor Total: R$ {total.toFixed(2).replace(".", ",")}
        </h5>
        <button className="btn btn-info text-white rounded-pill mt-2 px-4">
          FINALIZAR COMPRA
        </button>
      </div>
    </div>
  );
}
