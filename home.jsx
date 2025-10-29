import React, { useEffect, useState, useContext } from 'react';
import { Product } from './components/product';
import './App.css';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './App';
import { useFetch } from './fetcher';

const Home = () => {
  const { state, dispatch } = useContext(CartContext);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [productList] = useFetch('https://dummyjson.com/products');

  useEffect(() => {
    if (productList && productList.products?.length) setProducts(productList.products);
  }, [productList]);

  const productDetail = (id) => {
    navigate(`/product_detail/${id}`);
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center', margin: '20px 0' }}>All Products</h2>

      <div className='products'>
        {products?.length > 0 && products.map((product) => (
          <Product
            product={product}
            key={product.id}
            addToCart={(e) => {
              e.stopPropagation();
              dispatch({ type: "ADD", item: product });
              alert(`${product.title} added to cart`);
            }}
            productDetail={() => productDetail(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
