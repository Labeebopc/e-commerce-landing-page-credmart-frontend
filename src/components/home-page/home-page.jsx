import React from "react";
import Banner from "../banner/banner";
import Footer from "../footer/footer";
import ProductHeading from "../product-headings/product-heading";
import ProductPage from "../product-page/product-page";

const HomePage = () => {
    return (
        <>
            <Banner />
            <ProductHeading />
            <ProductPage heading="Shoes" />
            <ProductPage heading="Backpacks" />  
            <Footer />
        </>
    )
}
export default HomePage;