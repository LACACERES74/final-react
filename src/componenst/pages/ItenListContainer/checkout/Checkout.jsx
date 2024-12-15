import React, { useContext, useState } from 'react';
import { CartContext } from '../../../context/CartContext';
import { db } from '../../../../firebaseConfig';
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import {  useNavigate } from 'react-router-dom'; 



const Checkout = () => {
  const { cart, getTotalPrice, resetCart } = useContext(CartContext);
  const [userData, setUserData] = useState({ nombre: "", email: "", telefono: "" });
  const [orderId, setOrderId] = useState(null);
  const navigate = useNavigate(); 

  const capturarDatos = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!userData.nombre || !userData.email || !userData.telefono) {
      alert('Por favor, complete todos los campos.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const order = {
      buyer: userData,
      items: cart,
      total: getTotalPrice(),
    };

    const orderCollection = collection(db, "orders");
    const docRef = await addDoc(orderCollection, order);
    setOrderId(docRef.id);
    resetCart();

    cart.forEach(async (item) => {
      const productRef = doc(db, "product", item.id);
      await updateDoc(productRef, { stock: item.stock - item.quantity });
    });
  };
   const cancelarCompra = () => {
    setUserData({ nombre: '', email: '', telefono: '' }); // Limpiar el formulario
    resetCart(); // Limpiar el carrito
    navigate('/cart'); // Redirigir al carrito o página principal
  };

  return (
    <div>
      <h2>Formulario de Compra</h2>
      {orderId ? (
        <h2>Gracias por su compra. Tu ticket es: {orderId}</h2>
      ) : (
        <form onSubmit={handleSubmit}>
          <input type="text" name="nombre" placeholder="Nombre" onChange={capturarDatos} />
          <input type="text" name="email" placeholder="Email" onChange={capturarDatos} />
          <input type="text" name="telefono" placeholder="Teléfono" onChange={capturarDatos} />
          <button type="submit">Enviar</button>
          <button type="button" onClick={cancelarCompra}> Cancelar </button>
         
        </form>

      )};
        

        
      
    </div>
  );
};

export default Checkout;
