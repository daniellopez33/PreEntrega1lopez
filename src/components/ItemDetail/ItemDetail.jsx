import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ item }) => {
  const { id, name, description, price, stock } = item;
  const [showModal, setShowModal] = useState(false);

  const handleAddToCart = (quantity) => {
    // Lógica para agregar al carrito con la cantidad seleccionada
    console.log(`Añadir al carrito: ${quantity} ${name}(s)`);
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          {/* Aquí puedes agregar cualquier información detallada sobre el ítem */}
          <h2>{name}</h2>
          <p>{description}</p>
          <p>Precio: ${price}</p>
          <Button variant="primary" onClick={handleShowModal}>
            Ver Detalle
          </Button>
        </div>
        <div className="col-md-6">
          {/* Incorpora el contador de ítems */}
          <ItemCount initial={1} stock={stock} onAdd={handleAddToCart} />
        </div>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{description}</p>
          <p>Precio: ${price}</p>
          {/* Puedes agregar más detalles si es necesario */}
        </Modal.Body>
        <Modal.Footer>
          <ItemCount initial={1} stock={stock} onAdd={handleAddToCart} />
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ItemDetail;
