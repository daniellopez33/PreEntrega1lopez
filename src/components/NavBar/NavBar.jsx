// NavBar.js

import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS de Bootstrap
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  const categorias = ['Ruta', 'MTB', 'Gravel', 'Paseo']; // Puedes ajustar las categorías según tus necesidades

  return (
    <div> 
<nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ padding: '10px' }}>
  <div className="container">
    <a className="navbar-brand" href="/" style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>
      BiciShop
    </a>
    
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        {categorias.map((categoria, index) => (
          <li className="nav-item" key={index}>
            <a className="nav-link" href={`/categoria/${categoria.toLowerCase()}`} style={{ fontSize: '16px', color: '#555' }}>
              {categoria}
            </a>
          </li>
        ))}
      </ul>
    </div>
    
    <CartWidget />
  </div>
</nav>

    </div>
  );
};


export default NavBar;