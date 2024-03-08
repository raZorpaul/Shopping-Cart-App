import React, { useEffect, useState } from "react";
import "../styles/Nav.css"
import { Outlet, Link } from "react-router-dom";
// import logo from "../assets/apple.svg"
import logo from "../assets/apple.svg"
import cart from "../assets/cart.svg"
import Cart from "./Cart";
import CartButton from "./AddToCartButton";




export default function Nav() {
    const [isCartOpen, setIsCartOpen] = useState(false)

    const openCart = () => {
        setIsCartOpen(!isCartOpen);
    };


    return (
        <>
            <div className="nav-container">
                <div className="navContent">
                    <div className="logoSection">
                        <img src={logo} className="filter-white"/>
                    </div>
                    <div className="links">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/shop">Store</Link></li>
                            <li><Link to="/">About</Link></li>
                            {/* <li><Link path="/">search</Link></li> */}
                            <li>
                                <div className="cart" onClick={openCart}>
                                    <img src={cart} className="cart" />
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
            <Cart isOpen={isCartOpen} onClose={openCart} />
        </>
    )
}