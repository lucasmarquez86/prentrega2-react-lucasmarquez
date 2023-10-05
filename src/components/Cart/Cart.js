import { useCart } from "../../context/CartContext"; 
import { Link } from "react-router-dom";
import carrito from './1413908.png';

const Cart = () => {
    const { cart, clearCart, removeItem, total } = useCart();


    return (
        <section className="pt-5 container">
            <div className="row">
                {cart.length === 0 ? (
                    <section className="py-5 my-5">
                        <div className="container text-center" id="contenido-carrito">
                            <h4 className="text-center text-black">¡No hay productos en el carrito!</h4>
                            <div className="">
                            <img src={carrito} alt="carrito de compras" width='200' /> 
                            </div>
                            <Link to="/productos" className="text-center text-decoration-none fs-6 btn btn-primary border-0">Volver a la tienda</Link>
                        </div>
                    </section>
                ) : (
                    <section>
                        <h1 className="text-center">Checkout</h1>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th ></th>
                                    <th className="text-start">Producto</th>
                                    <th scope="col" className="text-end">Precio</th>
                                    <th scope="col" className="text-end">Cantidad</th>
                                    <th scope="col" className="text-end">Subtotal</th>
                                    <th scope="col" className="text-center">
                                        Eliminar
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map(({ id, name, img, price, quantity, }) => (
                                    <tr key={id}>
                                        <th scope="row">
                                        <img src={`/${img}`} alt={name} width='50' />
                                        </th>
                                        <td className="text-start align-middle">{name}</td>
                                        <td className="fw-bold text-end align-middle">${price}</td>
                                        <td className="fw-bold text-end align-middle">{quantity} x ${price}</td>
                                        <td className="fw-bold text-end align-middle">${(quantity * price).toFixed(2)}</td>
                                        <td className="fw-bold text-center align-middle">

                                        <button className="btn btn-danger" onClick={() => removeItem(id)}>
                                            X
                                        </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <h3>Total a Pagar: ${total().toFixed(2)}</h3>

                        <div className="d-flex justify-content-center mb-3">
                            <button className="btn btn-danger me-2" onClick={clearCart}>Vaciar Carrito</button>
                            <Link to="/productos" className="text-center text-decoration-none fs-6 btn btn-primary border-0">Seguir Comprando</Link>
                            <Link to="/checkout" className="btn btn-dark ms-2">Terminar Compra</Link>
                        </div>
                    </section>
                )}
            </div>
        </section>
    );
};

export default Cart;
