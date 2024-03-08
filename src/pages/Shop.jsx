import React, { useEffect, useState } from "react";
import "../styles/Shop.css";
import Nav from "../components/Nav";
import Card from "../components/Card";
import tshirt from "../assets/tshirtsample.jpg";
import Fetch from "../components/API/fetchproducts";
import { Link } from "react-router-dom";

export default function Shop() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = setTimeout(() => {
            fetch('https://fakestoreapi.com/products?limit=5')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                setLoading(false)
            })
            .catch((error) =>console.log('there was an error', error));
        }, 1000);

        // Clear timeout to avoid memory leaks
        return () => clearTimeout(fetchData);
    }, []);

    return (
        <>
            <div className="shopContainer">
                <Nav />
                <div className="itemContainer">
                    {
                        loading ? (
                            //if loading is true
                            <div className="ring">
                                Loading
                               <span></span>
                            </div>
                        )
                        :
                    products.length > 0 ? (
                        products.map((product) => (

                            <Card
                                key={product.id}
                                id={product.id}
                                img={product.image}
                                title={product.title}
                                price={product.price}
                            />
                        ))
                    ) : (
                        <p>No Products Found</p>
                    )}
                </div>
            </div>
        </>
    );
}
