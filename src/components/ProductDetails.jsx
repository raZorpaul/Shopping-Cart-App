import React from 'react';
import { useLocation } from 'react-router-dom';
import "../styles/ProductDetails.css"
import Nav from '../components/Nav';
import { useCart } from "./context/CartContext"; // Adjust the import path as needed

function ProductDetails() {
    const location = useLocation();
    const { addToCart } = useCart();

    // Check if location state exists and has the required properties
    if (!location.state || !location.state.id || !location.state.title || !location.state.img || !location.state.price) {
        return <div>No product details available.</div>;
    }

    const { id, img, title, price } = location.state;

    const handleAddToCart = () => {
        // Example: Update cart context or dispatch an action to update the cart
        console.log(`Product ${id} added to cart.`);
        addToCart(location.state); // Pass the entire product object to addToCart
    };

    return (
        <>
            <div className="productPage">
                <Nav />
                <div className="mainproductContainer">
                    <div className="imageContainer">
                        <img src={img} alt="" className='image' />
                    </div>
                    <div className="detailsContainer">
                        <div className='productTitle'>{title}</div>
                        <div>$ {price}</div>
                        <div className="addToCartButton" onClick={handleAddToCart}>
                            Add to Cart
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetails;
