import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({stock, initial, onAdd})=> {
    const [quantity, setQuantity]= useState(initial)

    const increment = () => {
      if (quantity < stock) {
        setQuantity(quantity + 1);
        console.log(`Cantidad incrementada: ${quantity + 1}`);
      }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

  if (!stock) {
    return (
      <div className='d-flex gap-3 text-danger bg-danger-light max-w-200 py-1 px-2 rounded-full'>
        No products in stock
      </div>
    );
  }

  return (
    
      <div className='Counter'>
          <div className='Controls'>
              <button className="Button" onClick={decrement}>-</button>
              <h4 className='Number'>{quantity}</h4>
              <button className="Button" onClick={increment}>+</button>

              <button className='Button ' onClick={() => {
  onAdd(quantity);
  console.log(`Cantidad total a agregar al carrito: ${quantity}`);
}} disabled={!stock}>
  Agregar al Carrito
</button>
      
      </div>
      </div>
  );
};

export default ItemCount;
