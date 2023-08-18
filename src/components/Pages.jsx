import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Categories from "./Categories"
import Product from "./Product"

export default function Pages() {
  return (
    <div>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/categories/:id" element={<Categories/>}/>
            <Route path="/categories/:id/:productID" element={<Product/>}/>
            <Route path="/about" element={<div>About</div>}/>
            <Route path="/contact" element={<div>Contact</div>}/>
        </Routes>
    </div>
  )
}
