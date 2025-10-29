import './App.css';
import Home from './home';
import { Header } from './components/header';
import Cart from './cart';
import Orders from './orders';
import ProductDetail from './productDetails';
import Ratting from './Ratting';
import Reviews from './review';
import Login from './login';
import { CartReducer } from './cart.reducer';
import { createContext, useReducer } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProtectedRoutes } from './protectedRoutes';

const initialCart = {
  cart: [],
  cartTotal: 0,
  cartItems: 0
};

export const CartContext = createContext();

function App() {
  const [state, dispatch] = useReducer(CartReducer, initialCart);

  return (
    <div className="App">
      <CartContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path='/' element={<Home />} />

            <Route element={<ProtectedRoutes />}>
              <Route path='/cart' element={<Cart />} />
              <Route path='/orders' element={<Orders />} />
            </Route>

            <Route path='/product_detail/:id' element={<ProductDetail />}>
              <Route path='reviews' element={<Reviews />} />
              <Route path='ratting' element={<Ratting />} />
            </Route>

            <Route path='/login' element={<Login />} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;
