import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { context } from './context';

function Header() {
  const { cart, setCart } = useContext(context);
  return (
    <>
      <div className="header">
        <Link to="/Next">cart {cart.length}</Link>
        <Link to="/">products</Link>
      </div>
    </>
  );
}

export default Header;
