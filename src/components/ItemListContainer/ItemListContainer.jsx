// ItemListContainer.js

import 'bootstrap/dist/css/bootstrap.min.css';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2 className="mt-4">{greeting}</h2>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;