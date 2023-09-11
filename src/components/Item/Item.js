import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, name, img, price, stock }) => {
  return (
    <article className='CardItem card mb-4'>
      <picture>
        <img src={`/product-images/${img}`} alt={name} className='ItemImg card-img-top' />
      </picture>
      <div className='card-body'>
        <h3 className='ItemHeader card-title mb-2'>{name}</h3>
        <p className='Info card-text mb-2'>
          Precio: ${price}
        </p>
        <p className='Info card-text mb-2'>
          Stock disponible: {stock}
        </p>
        <Link to={`/item/${id}`} className='Option btn btn-dark btn-block'>
          Ver Detalle
        </Link>
      </div>
    </article>
  );
};

export default Item;
