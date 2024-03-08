import React from "react";
import "../styles/Hero.css" 
import { Link } from "react-router-dom";

export default  function Hero() {
    return (
        <>
        <div className="hero">
            <div className="heroContainer">
                <div className="heroTitle">
                    <span>Your one-stop destination for all your shopping needs</span>
                </div>
                <div className="heroparagraph">
                    <span>Discover an unparalleled shopping experience with our extensive selection of products, unbeatable prices, and exceptional customer service. Shop now and transform your shopping journey with us.</span>
                </div>
                <div className="heroButton">
                    <div className="addToCartButton">
                    <Link to="/shop">SHOP NOW</Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}