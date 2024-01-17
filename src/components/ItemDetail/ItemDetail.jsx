// ItemDetail.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ item, onAddToCart, handleCloseModal }) => {
  const { name, description, price, stock } = item;

  const handleAddToCartClick = (quantity) => {
    onAddToCart(item, quantity);
  };

  return (
    <Modal.Body>
      <p>{description}</p>
      <p>Precio: ${price}</p>
      <ItemCount initial={1} stock={stock} onAdd={handleAddToCartClick} />
    </Modal.Body>
  );
};

export default ItemDetail;
