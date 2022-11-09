import React, { useState } from "react";
import { UseQuantityContext } from "../../Context/QuantityContext";
import MobileMenu from "../MobileMenu/MobileMenu";
import Cart from "../Cart/Cart";
import Backdrop from "../Backdrop/Backdrop";
import menu from "../../assets/images/menu.svg";
import logo from "../../assets/images/logo.svg";
import menuCart from "../../assets/images/menu-cart.svg";
import avatar from "../../assets/images/avatar.png";

const Header = () => {
  const { itemQuantity } = UseQuantityContext();
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [mobileMenIsOpen, setMobileMenIsOpen] = useState(false);

  const openCart = () => {
    setCartIsOpen((prevState) => !prevState);
  };

  const CloseCart = () => {
    setCartIsOpen((prevState) => !prevState);
  };

  const openMobileMenu = () => {
    setMobileMenIsOpen((prevState) => !prevState);
  };

  const CloseMobileMenu = () => {
    setMobileMenIsOpen((prevState) => !prevState);
  };

  return (
    <header className="header">
      <div onClick={openMobileMenu}>
        <img src={menu} alt="menu icon" className="header-menu-icon" />
      </div>
      {mobileMenIsOpen && <MobileMenu handleClose={CloseMobileMenu} />}
      {mobileMenIsOpen && <Backdrop onClick={CloseMobileMenu} />}
      <img src={logo} alt="company logo" className="header-company-logo" />
      {itemQuantity > 0 ? (
        <span className="header-cart-quantity">{itemQuantity}</span>
      ) : null}
      <div onClick={openCart}>
        {/* 

        You could do this with two images, e.g. 

        {ifRed ? <img src=""> : <img src=""> }

        Or via raw SVG, like this...

        Have a play with this: https://observablehq.com/@d3/gallery
        
        */}
        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill={
          Math.round(Math.random()) ? "#FF0000" : "#69707D"
        } fill-rule="nonzero" /></svg>
        {/* <img src={menuCart} alt="cart icon" className="header-menu-cart" /> */}
      </div>
      {cartIsOpen && <Cart />}
      {cartIsOpen && <Backdrop onClick={CloseCart} />}
      <img src={avatar} alt="avatar" className="header-avatar" />
    </header>
  );
};

export default Header;
