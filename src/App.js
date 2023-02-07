import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/header";
import './App.css'
import Banner from "./components/banner/banner";
import ProductHeading from "./components/product-headings/product-heading";
import ProductPage from "./components/product-page/product-page";
import ContactUs from "./components/contactUs/contactUs";
function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Banner/>
        <ProductHeading/>
        <ProductPage heading="Watch"/>
        <ProductPage heading="Backpacks"/>
        <ProductPage heading="Shoes"/>
        <ContactUs/>
        {/* <ProductCard/> */}
      </BrowserRouter>

    </>
  );
}

export default App;
