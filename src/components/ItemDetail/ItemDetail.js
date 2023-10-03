import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({id, name, price, stock, img, description }) => {

    const [quantity, setQuantity] = useState(0);
    const { addItem } = useCart();

    const handleAddToCart = (number) => {
        setQuantity(number)
        addItem({ id, name, price, stock,  img, description}, number)
    }

    return (
        <section className='container detalle-producto'>
          <div className='text-center text-md-start'> <Link to='/productos' className='btn btn-sm btn-dark mt-2 ml-2'>Volver</Link></div>
            <div className="row">
                <div className="col-md-6">
          

                    <picture>
                        <img src={`/${img}`} alt={name} className='img-fluid' />
                    </picture>
                </div>
                <div className="col-md-6">
                    <div className='text-center text-md-start'>
                        <h3 className='fw-bold'>{name}</h3>
                        <p>{description}</p>
                        <p className='fw-bold'>${price}</p>
                    </div>
                    <div className="text-center">
                        {quantity > 0 ? (
                            <Link to='/cart' className='btn btn-primary'>Terminar compra</Link>
                        ) : (
                            <ItemCount initial={1} stock={stock || 0} onAdd={handleAddToCart} />
                        )}
                       
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ItemDetail;
