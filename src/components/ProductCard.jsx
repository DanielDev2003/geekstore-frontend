import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { StoreContext } from '../context/StoreProvider';

const ProductCard = ({ image, title, price, variant = 'home', id, product }) => {
  const isHome = variant === 'home';
  const isWishlist = variant === 'wishlist';
  const navigate = useNavigate();

  const { addToCart, removeFromWishlist } = useContext(StoreContext);

  return (
    <Card
      className="h-100 text-center shadow-sm"
      style={{
        border: 'none',
        backgroundColor: isWishlist ? '#F7F7F7' : 'transparent',
        borderRadius: '16px',
        overflow: 'hidden',
        position: 'relative',
        cursor: isHome ? 'pointer' : 'default',
        padding: isWishlist ? '10px' : '0',
      }}
      onClick={() => isHome && navigate(`/produto/${id}`)}
    >
      {isWishlist && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            padding: '5px 10px 0 10px',
          }}
        >
          <button
            style={{
              cursor: 'pointer',
              backgroundColor: 'transparent',
              border: 'none',
              color: '#00b8b8',
              fontSize: '0.9rem',
              fontWeight: '500',
            }}
            onClick={(e) => {
              e.stopPropagation();
              removeFromWishlist(product.id);
            }}
          >
            remover
          </button>
        </div>
      )}

      <Card.Img
        variant="top"
        src={image}
        alt={title}
        style={{ height: '400px', objectFit: 'cover' }}
      />

      <Card.Body
        className="d-flex flex-column justify-content-between p-3"
        style={{
          backgroundColor: isHome ? '#2c00ff' : 'transparent',
          color: isHome ? '#fff' : '#000',
        }}
      >
        <Card.Title
          style={{
            fontSize: '1rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
          }}
        >
          {title}
        </Card.Title>

        <Card.Text as="div" className="mb-3">
          <strong style={{ fontSize: '1rem' }}>R$ {price}</strong>
        </Card.Text>

        <Button
          variant="primary"
          className="w-100"
          style={{
            backgroundColor: isHome ? '#00DED1' : '#2c00ff',
            border: 'none',
            fontWeight: 'bold',
            borderRadius: '50px',
            padding: '10px 0',
            fontSize: '1.1rem',
          }}
          onClick={(e) => {
            e.stopPropagation();
            if (isHome) addToCart(product, 1);
            else addToCart(product, 1);
          }}
        >
          {isHome ? 'Comprar' : 'Adicionar ao carrinho'}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
