import React from "react";
import "../styles/ProductCard.css";

const ProductCard = ({ image, name, description, id, price }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-details">
        <h2 className="product-name">{name}</h2>
        <p className="product-description">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
