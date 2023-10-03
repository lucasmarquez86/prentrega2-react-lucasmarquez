import React, {useContext } from "react";
import { cartContext } from "../../context/CartContext";

const CartItem = ({item}) => {
    const {removeItem}= useContext(cartContext)
    return (
        <div className="d-flex justify-content-around align-items-center">
            <img src={item.img} alt={item.name} width={'150rem'} />
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>Cantidad:{item.quantity}</p>
            <p>Subtotal: ${item.quantity * item.price}</p>
            <button onClick={()=> removeItem(item.id)} >Eliminar</button>
        </div>
)}

export default CartItem