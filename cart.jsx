import { useContext } from "react";
import { CartContext } from "./App";
import { Product } from "./components/product";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);
  const navigate = useNavigate();

  const productDetail = (id) => navigate(`/product_detail/${id}`);

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>

      {state.cart.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <>
          {state.cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-details">
                <img className="cart-image" src={item.images?.[0]} alt={item.title} style={{width:70, height:70, borderRadius:6}}/>
                <div className="cart-info">
                  <div className="item-title">{item.title}</div>
                </div>
                <div style={{display:'flex', alignItems:'center', gap:12}}>
                  <div className="item-price">₹{item.price}</div>
                  <button onClick={(e) => { e.stopPropagation(); dispatch({ type: "REMOVE", item }); }} className="remove-btn">Remove</button>
                </div>
              </div>
            </div>
          ))}

          <div className="cart-total">
            Total: ₹{state.cart.reduce((sum, it) => sum + (it.price || 0), 0)}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
