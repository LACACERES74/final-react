import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // Verificar si el producto ya existe en el carrito
    const existingProductIndex = cart.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
      // Producto ya está en el carrito, actualizar la cantidad
      const existingProduct = cart[existingProductIndex];
      const newQuantity = existingProduct.quantity + product.quantity;

      if (newQuantity <= existingProduct.stock) {
        // Si no excede el stock, actualizamos la cantidad
        const updatedCart = [...cart];
        updatedCart[existingProductIndex] = { ...existingProduct, quantity: newQuantity };
        setCart(updatedCart);
      } else {
        // Si excede el stock, mostrar una alerta
        alert("No puedes agregar más productos de los que hay en stock.");
      }
    } else {
      // Producto no está en el carrito, agregarlo
      if (product.quantity > product.stock) {
        alert("No hay suficiente stock.");
        return; // Si no hay suficiente stock, terminamos la ejecución aquí
      }
  
      setCart((prevCart) => [...prevCart, product]); // Si la cantidad es válida, agregamos el producto
    }
  };

  const resetCart = () => {
    setCart([]);
  };

  const removeProduct = (id) => {
    let filteredArray = cart.filter((element) => element.id !== id);
    setCart(filteredArray);
  };

  const getTotalPrice = () => {
    let total = cart.reduce((total, element) => {
      return total + element.precio * element.quantity;
    }, 0);
    return total;
  };

  let data = { cart, addToCart, resetCart, removeProduct, getTotalPrice };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
CartContextProvider.propTypes = {
  children: PropTypes.node.isRequired, 
};