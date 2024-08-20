// src/components/Product.js
import React, { useState } from 'react';

function Product({ product }) {
  const [inCart, setInCart] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const addToCart = () => {
    setInCart(true);
    // Here, you can also add logic to update a global cart state or call an API
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    // This could also involve an API call to update user's favorites
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure><img src={product.imageUrl} alt={product.name} style={{ height: '200px', objectFit: 'cover' }} /></figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>${product.price.toFixed(2)}</p>
        <div className="card-actions justify-end">
          <button className={`btn ${inCart ? 'btn-success' : 'btn-primary'}`} onClick={addToCart}>
            {inCart ? 'In Cart' : 'Add to Cart'}
          </button>
          <button className={`btn btn-accent ml-2 ${isFavorite ? 'btn-error' : ''}`} onClick={toggleFavorite}>
            {isFavorite ? 'Remove Favorite' : 'Add to Favorites'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
