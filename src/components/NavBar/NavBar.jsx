// NavBar.js

import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS de Bootstrap
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  const categorias = ['Ruta', 'MTB', 'Gravel', 'Paseo']; // Puedes ajustar las categorías según tus necesidades

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">BiciShop</a>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {categorias.map((categoria, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link" href={`/categoria/${categoria.toLowerCase()}`}>{categoria}</a>
              </li>
            ))}
          </ul>
        </div>
         <CartWidget/>
      </div>
     
    </nav>
  );
};


export default NavBar;