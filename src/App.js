import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import './App.css'
import Cart from "./components/cart/cart";
import HomePage from "./components/home-page/home-page";
function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
       <Routes>
       <Route path="/" element={<HomePage/>}/>
        <Route path="/cart" element={<Cart/>}/>
       </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
