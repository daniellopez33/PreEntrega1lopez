import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Item = ({ id, name, description, price, onClick }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-text">{description}</p>
        <p className="card-text">Precio: ${price}</p>
        <button className="btn btn-primary" onClick={() => onClick(id)}>
          Ver Detalle
        </button>
      </div>
    </div>
  );
};

