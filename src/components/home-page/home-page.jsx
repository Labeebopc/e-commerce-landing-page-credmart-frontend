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
            <ProductPage heading="Watch" />
            <ProductPage heading="Backpacks" />
            <ProductPage heading="Shoes" />
            <Footer />
        </>
    )
}
export default HomePage;