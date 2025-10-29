import '../App.css';

export const Product = ({ product, addToCart, productDetail, remove }) => {
  return (
    <div className='product' onClick={() => productDetail(product.id)}>
      <img
        src={product?.images?.[0]}
        alt={product?.title}
        height={200}
        width={150}
      />
      <p>{product?.title}</p>
      <p>₹{product?.price}</p>

      {addToCart && <button onClick={(e) => addToCart(e, product)}>Add to cart</button>}
      {remove && <button onClick={(e) => remove(e, product)}>Remove</button>}
    </div>
  );
};
