// NavBar.jsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = ({ items }) => {
  const categorias = ['Ruta', 'MTB', 'Gravel', 'Paseo'];
  const [cartQuantity, setCartQuantity] = useState(0);

  const handleAddToCart = (quantity) => {
    setCartQuantity(cartQuantity + quantity);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <a className="navbar-brand" href="/" style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>
          BiciShop
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {categorias.map((categoria, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link" href={`/categoria/${categoria.toLowerCase()}`} style={{ fontSize: '16px', color: '#555' }}>
                  {categoria}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <CartWidget cartQuantity={cartQuantity} />
      </div>
    </nav>
  );
};

export default NavBar;
