import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Counter from '../../../common/counter/Counter';
import { db } from '../../../../firebaseConfig';
import { collection, doc, getDoc } from "firebase/firestore";


const ItemDetail = () => {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const productsCollection = collection(db, "product");
    const refDoc = doc(productsCollection, id);
    getDoc(refDoc).then((res) => setSelectedProduct({ ...res.data(), id: res.id }));
  }, [id]);

  if (!selectedProduct) {
    return <div>Producto no encontrado.</div>;
  }

  return (
    <div>
      <h2>{selectedProduct.nombre}</h2> {/* Mostrar el nombre del producto */}
      <img src={selectedProduct.imagen} alt={selectedProduct.nombre} /> {/* Mostrar la imagen */}
      <p>{selectedProduct.descripcion}</p> {/* Descripción, si existe */}
      <p>Categoría: {selectedProduct.categoria}</p>
      <p>Precio: ${selectedProduct.precio}</p>
      <p>Stock: {selectedProduct.stock}</p>
      <Counter stock={selectedProduct.stock} product={selectedProduct} /> {/* Pasa el producto completo */}
    </div>
  );
};

export default ItemDetail;
