import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from "../../../context/CartContext";


const Cart = () => {
  const { cart, resetCart, removeProduct, getTotalPrice } = useContext(CartContext);
  const totalAmount = getTotalPrice();

  return (
    <div>
      <h1>Carrito</h1>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} style={{ display: 'flex', marginBottom: '15px' }}>
            <img src={item.imagen} alt={item.nombre} style={{ width: '100px', height: '100px', objectFit: 'cover', marginRight: '15px' }} />
            <div>
              <h3>{item.nombre}</h3>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio: ${item.precio}</p>
              <p>Total: ${item.precio * item.quantity}</p>
              <button onClick={() => removeProduct(item.id)}>Eliminar</button>
            </div>
          </div>
        ))
      )}
      <h3>Total del carrito: ${totalAmount}</h3>
      <button onClick={resetCart}>Limpiar el carrito</button>
      <Link to="/Checkout">Finalizar compra</Link>
    </div>
  );
};

export default Cart;
