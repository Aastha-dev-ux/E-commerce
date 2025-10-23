import { useParams, useNavigate, NavLink, Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      const res = await fetch(`https://dummyjson.com/products/${params.id}`);
      const item = await res.json();
      setProduct(item);
    };
    getProduct();
  }, [params.id]);

  const handleAddToCart = () => {
    if (product) {
      const existingCart = JSON.parse(localStorage.getItem('shopping_cart')) || [];
      const updatedCart = [...existingCart, product];
      localStorage.setItem('shopping_cart', JSON.stringify(updatedCart));
      alert(`${product.title} has been added to your cart!`);
      navigate('/cart');
    }
  };

  return (
    <>
      {product ? (
        <div className="product-detail-container">
          <h2>{product.title}</h2>
          <img
            src={product.images[0]}
            alt={product.title}
          />
          <p className="price">${product.price}</p>
          <p className="description">{product.description}</p>
          <p className="rating">Rating: {product.rating} / 5</p>
          
          <button onClick={handleAddToCart} className="add-to-cart-btn">
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