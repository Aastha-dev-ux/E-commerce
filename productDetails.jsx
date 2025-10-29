import { useParams, NavLink, Outlet, useNavigate } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "./App";
import { useFetch } from "./fetcher";

const ProductDetail = () => {
  const { dispatch } = useContext(CartContext);
  const params = useParams();
  const [product] = useFetch(`https://dummyjson.com/products/${params.id}`);
  const navigate = useNavigate();

  const addToCart = () => {
    if (product) {
      dispatch({ type: "ADD", item: product });
      alert(`${product.title} has been added to your cart!`);
      navigate('/cart');
    }
  };

  useEffect(() => {
  }, [product]);

  return (
    <>
      {product ? (
        <div className="product-detail-container">
          <h2>{product.title}</h2>
          <img src={product.images[0]} alt={product.title} />
          <p className="price">₹{product.price}</p>
          <p className="description">{product.description}</p>
          <p className="rating">Rating: {product.rating} / 5</p>

          <button onClick={addToCart} className="add-to-cart-btn">
            Add to Cart
          </button>

          <div className="nested-nav">
            <NavLink to="ratting">Rating</NavLink>
            <NavLink to="reviews">Reviews</NavLink>
          </div>

          <Outlet />
        </div>
      ) : (
        <p>...Loading</p>
      )}
    </>
  );
};

export default ProductDetail;
