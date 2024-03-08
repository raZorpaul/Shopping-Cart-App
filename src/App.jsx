import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage.jsx';
import Shop from './pages/Shop.jsx';
import { BrowserRouter } from 'react-router-dom';
import ProductDetails from './components/ProductDetails.jsx';
import Cart from './components/Cart.jsx';
import { CartProvider } from './components/context/CartContext.jsx';

function App() {
  return (
    <>
       <BrowserRouter>
          <CartProvider> {/* Wrap your routes with CartProvider */}
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/shop/:productid" element={<ProductDetails />} />
              {/* Route for Cart component */}
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </CartProvider>
       </BrowserRouter>
    </>
  );
}

export default App;
