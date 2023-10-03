import React,{ useContext} from "react";
import { cartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const{cart, clearCart, total }= useContext(cartContext)
    return (
        <div>
            {cart.length
            ? <div> 
                <p>total a Pagar: ${total()}</p>
                <div>
                    <button className="btn btn-danger" onClick={clearCart}> Vaciar Carrito </button>
                    <Link className="btn btn-dark"> Terminar Compra </Link>
                </div>
                </div>
            : <div>
                <h3>tu carrito esta Vacio!</h3>
                <Link to='/' className="btn btn-dark"> Ir a Comprar</Link>
                </div>}
        
        </div>
    )
}

export default Cart