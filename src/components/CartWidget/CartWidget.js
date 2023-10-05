import React from 'react';
import './CartWidget.css';
import { Badge } from '@mui/material';
import cart from './assets/shopping-cart.svg';
import { useCart } from '../../context/CartContext'; 

const Cartwidget = () => {
  const { totalQuantity } = useCart();

  return (
    <div className='d-flex justify-content-around align-items-center'>
      <img src={cart} alt="carrito de compras" width='30' />
      {totalQuantity() > 0 && (
        <span className="position-relative">
          <Badge className="badge-bootstrap">
  {totalQuantity()}
</Badge>
        </span>
      )}
    </div>
  );
}

export default Cartwidget;
