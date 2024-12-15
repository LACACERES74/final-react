import { useContext } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  // Calcular el total de productos en el carrito
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link to="/cart" style={{ textDecoration: 'none', color: 'black' }}>
      <span style={{ fontSize: '24px', marginRight: '8px' }}>🛒</span>
      <span style={{ fontSize: '18px', fontWeight: 'bold' }}>
        {totalItems || 0}
      </span>
    </Link>
  );
};

export default CartWidget;

