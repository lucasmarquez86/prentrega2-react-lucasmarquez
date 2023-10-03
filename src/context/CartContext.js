import React, { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Obtener el carrito inicial de localStorage o inicializarlo como un arreglo vacío
  const initialCart = JSON.parse(localStorage.getItem("cart")) || [];

  // Estado para mantener la lista del carrito
  const [cart, setCart] = useState(initialCart);

  // Actualizar el localStorage cada vez que el carrito cambie
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Agregar un item al carrito
  const addItem = (item, quantity) => {
    const isInCart = cart.some((cartItem) => cartItem.id === item.id);

    if (!isInCart) {
      setCart((prevCart) => [...prevCart, { ...item, quantity }]);
    } else {
      setCart((prevCart) =>
        prevCart.map((prod) =>
          prod.id === item.id ? { ...prod, quantity: prod.quantity + quantity } : prod
        )
      );
    }
  };

  // Eliminar un item del carrito
  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  // Vaciar el carrito por completo
  const clearCart = () => {
    setCart([]);
  };

  // Verificar si un item está en el carrito
  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  // Obtener la cantidad total de items en el carrito
  const totalQuantity = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  // Obtener el total del carrito
  const total = () => {
    return cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        isInCart,
        totalQuantity,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

export default CartProvider;
