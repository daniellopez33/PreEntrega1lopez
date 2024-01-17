import 'bootstrap/dist/css/bootstrap.min.css';
import cart from './assets/cart.svg';

const CartWidget = ({ cartQuantity }) => {
  return (
    <div className="cart-widget">
      <i className="bi bi-cart"></i>
      <img src={cart} alt="Cart" />
      {cartQuantity > 0 && <span className="badge bg-secondary">{cartQuantity}</span>}
    </div>
  );
};

export default CartWidget;
