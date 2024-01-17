// ItemListContainer.jsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
import {Item} from '../Item/Item';
import ItemDetail from '../ItemDetail/ItemDetail';

export const ItemListContainer = ({ items, greetings }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleItemClick = (itemId) => {
    const selectedItem = items.find((item) => item.id === itemId);
    setSelectedItem(selectedItem);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddToCart = (item, quantity) => {
    console.log(`Añadir al carrito: ${quantity} ${item.name}(s)`);
    setCartQuantity(cartQuantity + quantity);
    handleCloseModal();
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">{greetings}</h2>

      <div className="row row-cols-1 row-cols-md-3">
        {items.map((item) => (
          <div key={item.id} className="col mb-4">
            <Item {...item} onClick={() => handleItemClick(item.id)} />
          </div>
        ))}
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedItem?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedItem && (
            <div className="row">
              <div className="col-md-12">
                <ItemDetail item={selectedItem} onAddToCart={handleAddToCart} />
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>

      <div className="text-center mt-3">
        <p>Cantidad en el carrito: {cartQuantity}</p>
      </div>
    </div>
  );
};
