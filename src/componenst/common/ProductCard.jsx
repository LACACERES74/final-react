// ProductCard.js
import React from 'react';
import PropTypes from 'prop-types'; 
import './ProductCard.css'; 
import { Link } from 'react-router-dom';


const ProductCard = ({ product }) => {


  return (
    <div className="product-card">
      <img src={product.imagen} alt={product.nombre} className="product-image" />
      
      <div className="product-info">
        <h3 className="product-name">{product.nombre}</h3>
        <p className="product-categoria">Categoría: {product.categoria}</p>
        <p className="product-genero">Género: {product.genero}</p>
        <p className="product-precio">Precio: ${product.precio}</p>
        <p className="product-stock">Stock: {product.stock} unidades</p>
      </div>
      <Link to={`/product/${product.id}`} className="view-details-button">
        Ver detalles
      </Link>
    </div>
  );}
  // Validar los tipos de las props
  ProductCard.propTypes = {
    product: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      nombre: PropTypes.string.isRequired,
      categoria: PropTypes.string.isRequired,
      genero: PropTypes.string.isRequired,
      precio: PropTypes.number.isRequired,
      imagen: PropTypes.string.isRequired,
      stock: PropTypes.number.isRequired,
    }).isRequired,
};

export default ProductCard;