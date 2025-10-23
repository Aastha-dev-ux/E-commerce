import React, { useState, useEffect } from 'react';
import { Product } from './components/product';
import './App.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    const getProducts = async () => {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProducts(data?.products);
    };

    useEffect(() => {
        getProducts();
    }, []); 

    const addToCart = (e, product) => {
        e.stopPropagation();

        const existingCart = JSON.parse(localStorage.getItem('shopping_cart')) || [];

        const updatedCart = [...existingCart, product];

        localStorage.setItem('shopping_cart', JSON.stringify(updatedCart));

        alert(`${product.title} has been added to the cart!`);
    };

    const productDetail = (id) => {
        navigate(`/product_detail/${id}`);
    };

    return (
        <div>
            <h2 style={{ textAlign: 'center', margin: '20px 0' }}>All Products</h2>

            <div className='products'>
                {
                    products.length > 0 && products.map((product) => (
                        <Product
                            product={product}
                            key={product.id}
                            addToCart={(e) => addToCart(e, product)}
                            productDetail={() => productDetail(product.id)}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Home;