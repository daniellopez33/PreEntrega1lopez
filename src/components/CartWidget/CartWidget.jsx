// CartWidget.js
 
import 'bootstrap/dist/css/bootstrap.min.css';
import  cart from './assets/cart.svg'

const CartWidget = () => {
  const itemsInCart = 5; // Número hardcodeado (puedes cambiarlo según necesites)

  return (
    <div className="cart-widget">
      <i className="bi bi-cart"></i>
      <img src={cart} />
      <span className="badge bg-secondary">{itemsInCart}</span>
    </div>
  );
};

export default CartWidget;