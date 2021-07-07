import React, { useContext, useState } from 'react';
import Next from './next.js';
import './style.css';
import { Link } from 'react-router-dom';
import Header from './header.js';
import { context } from './context';

export default function Home() {
  const { products } = useContext(context);
  let { cart, setCart } = useContext(context);

  let addToCart = product => {
    setCart([...cart, product]);
  };
  return (
    <>
      <div className="products">
        {products.map((product, id) => (
          <div key={id}>
            <img src={product.Img} alt="" />
            <h1>{product.Title}</h1>
            <h3>{product.Price}</h3>
            <button type="submit" onClick={() => addToCart(product)}>
              add to cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
