import React, { useContext } from 'react';
import Home from './homes.js';
import './style.css';
import { context } from './context';

export default function Next() {
  const { cart, setCart } = useContext(context);

  let clearCart = () => {
    setCart([]);
  };
  let removeFromCart = remove => {
    setCart(cart.filter(product => product !== remove));
  };

  let getCost = () => {
    return cart.reduce((total, { Price }) => total + Price, 0);
  };
  return (
    <>
      {cart == 0 ? (
        <h2 style={{ textAlign: 'center' }}> cart is empty</h2>
      ) : (
        <div className="products">
          {cart.map((product, id) => (
            <div key={id}>
              <img src={product.Img} alt="" />
              <h1>{product.Title}</h1>
              <h3>{product.Price}</h3>
              <button onClick={() => removeFromCart(product)}>remove</button>
            </div>
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <button onClick={() => clearCart()}>Clear Cart</button>
      )}
      {cart == 0 ? (
        <p />
      ) : (
        <h3 style={{ textAlign: 'center' }}>$ {getCost()}</h3>
      )}
    </>
  );
}
