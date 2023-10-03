import React from 'react';
import { Badge } from '@mui/material';
import cart from './assets/shopping-cart.svg';
import { useCart } from '../../context/CartContext'; 

const Cartwidget = () => {
  const { totalQuantity } = useCart();

  return (
    <div className='d-flex justify-content-around align-items-center'>
      <img src={cart} alt="carrito de compras" width='30' />
      {totalQuantity() > 0 && (
        <Badge bg="danger" className="rounded-circle">
          {totalQuantity()}
        </Badge>
      )}
    </div>
  );
}

export default Cartwidget;
