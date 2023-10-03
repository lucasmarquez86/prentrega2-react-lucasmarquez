import './ItemDetailContainer.css';
import { useState, useEffect, useContext } from 'react';
import { getProductsById } from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { cartContext } from '../../context/CartContext';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();
  const { addItem } = useContext(cartContext);

  useEffect(() => {
    getProductsById(itemId)
      .then(response => {
        setProduct(response);
        console.log(response); // Agrega este console.log para ver el producto en la consola
      })
      .catch(error => {
        console.error(error);
      });
  }, [itemId]);

  const addToCart = (quantity) => {
    if (product) {
      addItem(product, quantity);
    }
  };

  return (
    <div className='ItemDetailContainer'>
      <ItemDetail {...product} onAddToCart={addToCart} />
    </div>
  );
};

export default ItemDetailContainer;
