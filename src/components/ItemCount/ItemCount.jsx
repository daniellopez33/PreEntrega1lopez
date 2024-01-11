import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS de Bootstrap

const ItemCount = () => {
  const [quantity, setQuantity] = useState(1); // Asumiendo que 'initial' está definido en algún lugar

  const handleIncrement = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
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
          <button className="btn btn-success">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
