import React, { useContext } from 'react';
import { Badge } from '@mui/material';
import cart from './assets/shopping-cart.svg';
import { cartContext } from '../../context/CartContext'; 

const Cartwidget = () => {
    
    const { cartQuantity } = useContext(cartContext); 
    return (
        <div className='d-flex justify-content-around align-items-center'>
            <img src={cart} alt="carrito de compras" width='30' /> 
             {cartQuantity() > 0 && <Badge bg="danger">{cartQuantity()}</Badge>}
        </div>
    );
}

export default Cartwidget;

