import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';

const btnStyles = {
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  fontSize: '18px',
  cursor: 'pointer',
  borderRadius: '5px',
  transition: 'background-color 0.3s ease',
  margin: '0 10px',
};

const divStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
};

const Counter = ({ stock, product }) => {
  const { addToCart } = useContext(CartContext);
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    if (count < stock) setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) setCount(count - 1);
  };

  const onAdd = () => {
    if (count > stock) {
      alert("No hay suficiente stock");
      return;
    }
    
    addToCart({ ...product, quantity: count });
  };

  return (
    <div style={divStyles}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button onClick={handleDecrement} style={btnStyles} disabled={count <= 1}>
          -
        </button>
        <h1>{count}</h1>
        <button onClick={handleIncrement} style={btnStyles} disabled={count >= stock}>
          +
        </button>
      </div>
      <button 
  onClick={onAdd} 
  style={btnStyles} 
  disabled={count <= 0 || count > stock} // Deshabilitar si count <= 0 o count > stock
>
  Agregar al Carrito
</button>
    </div>
  );
};

export default Counter;
