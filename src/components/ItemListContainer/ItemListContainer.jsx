import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Item } from '../Item/Item';
import ItemDetail from '../ItemDetail/ItemDetail';
import ItemCount from '../ItemCount/ItemCount';
import { Modal, Button } from 'react-bootstrap';

export const ItemListContainer = ({ items, greetings }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleItemClick = (itemId) => {
    const selectedItem = items.find((item) => item.id === itemId);
    setSelectedItem(selectedItem);
    setShowModal(true); // Abre el modal al seleccionar un ítem
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedItem(null); // Limpia el ítem seleccionado al cerrar el modal
  };

  const handleAddToCart = (quantity) => {
    // Lógica para agregar al carrito
    console.log(`Añadir al carrito: ${quantity} ${selectedItem.name}(s)`);
    setCartQuantity(cartQuantity + quantity);
    handleCloseModal(); // Cierra el modal después de agregar al carrito
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">{greetings}</h2>

      {selectedItem && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedItem.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-4 mb-4">
                <Item {...selectedItem} onClick={() => handleItemClick(selectedItem.id)} />
              </div>
              <div className="col-md-8">
                <ItemDetail item={selectedItem} />
                <ItemCount initial={1} stock={selectedItem.stock} onAdd={handleAddToCart} />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      <div className="row row-cols-1 row-cols-md-3">
        {items.map((item) => (
          <div key={item.id} className="col mb-4">
            <Item {...item} onClick={() => handleItemClick(item.id)} />
          </div>
        ))}
      </div>
      <div className="text-center mt-3">
        <p>Cantidad en el carrito: {cartQuantity}</p>
      </div>
    </div>
  );
};
