import { Link } from 'react-router-dom'; // Importa el componente Link
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0)

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)
  }
  
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="p-4 text-center">
            <img
              src={`/${img}`}
              alt={name}
              className="ItemImg img-fluid"
            />
          </div>
        </div>
        <div className="col-md-6">
          <article className="p-4 CardItem">
            <header className="Header">
              <h2 className="ItemHeader">{name}</h2>
            </header>
            <section className="ItemDetails">
              <p className="Info">Categoría: {category}</p>
              <p className="Info">Descripción: {description}</p>
              <p className="Info">Precio: ${price}</p>
            </section>
            <footer className="ItemFooter">
              {
                quantityAdded > 0 ? (
                  <Link to='/cart' className='Option'>Terminar Compra</Link>
                ) : (
                  <ItemCount initial ={1} stock={stock} onAdd={handleOnAdd}/>
                )
              }
            </footer>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
