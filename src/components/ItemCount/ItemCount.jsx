import React, { useState } from 'react';

const ItemCount = ({ initial, stock, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const handleIncrement = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
      console.log('Incremented:', quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      console.log('Decremented:', quantity - 1);
    }
  };

  const handleAddToCart = () => {
    // Lógica para agregar al carrito, puedes usar la función onAdd
    if (onAdd) {
      onAdd(quantity);
      console.log('Added to cart:', quantity);
    }
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col">
          <p>Cantidad: {quantity}</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button className="btn btn-primary" onClick={handleIncrement}>
            Agregar
          </button>
        </div>
        <div className="col">
          <button className="btn btn-primary" onClick={handleDecrement}>
            Quitar
          </button>
        </div>
        <div className="col">
          <button className="btn btn-success" onClick={handleAddToCart}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
