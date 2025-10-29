export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const exists = state.cart.some(el => el.id === action.item.id);
      if (exists) return { ...state };
      const newCart = [...state.cart, action.item];
      return {
        ...state,
        cart: newCart,
        cartItems: newCart.length
      };
    }
    case "REMOVE": {
      const newCart = state.cart.filter(el => el.id !== action.item.id);
      return {
        ...state,
        cart: newCart,
        cartItems: newCart.length
      };
    }
    default: return { ...state };
  }
};
