// ProductList.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import { db } from '../../firebaseConfig';
import { collection, getDocs, query, where} from 'firebase/firestore';
import { ClipLoader } from 'react-spinners';
import "./ProductList.css";


const ProductList = () => {
  const { nombre } = useParams();  
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);  

  // Traer los productos de Firestore
  useEffect(() => {
    
    const fetchProducts = async () => {
      try {
                const productCollection = collection(db, "product"); 
        let refCollection = productCollection;
        
        if (nombre) {   
          const productCollectionFiltered = query(productCollection, where("categoria", "==", nombre));
          refCollection = productCollectionFiltered;
        }

        // Realizamos la consulta y obtenemos los productos
        const querySnapshot = await getDocs(refCollection);
        const products = querySnapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id,  
        }));

        setFilteredProducts(products);  
        setLoading(false);  
      } catch (err) {
        
        setError("Hubo un error al cargar los productos.");  
        setLoading(false);
      }
    };

    fetchProducts();  
  }, [nombre]);  

  if (loading) {
    return (
      <div className="spinner-container">
        <ClipLoader color="#007bff" loading={loading} size={50} /> {/* Spinner de carga */}
      </div>
    );
    
  }

  if (error) {
    return <p>{error}</p>; 
  }

  return (
    <div className="product-list">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((prod) => (
          <ProductCard key={prod.id} product={prod} /> 
        ))
      ) : (
        <p>No hay productos disponibles en esta categoría.</p>  
      )}
    </div>
  );
};

export default ProductList;