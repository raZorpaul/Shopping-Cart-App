import React from 'react';
import '../styles/Homepage.css';
import Card from '../components/Card';
import img from "../assets/react.svg"
import Nav from '../components/Nav';
import Hero from '../components/Hero';

function Homepage() {
  return (
    <div className="homepage-container">
        <Nav/>
        <div>
          <Hero/>
        </div>
    </div>
  );
}

export default Homepage;
