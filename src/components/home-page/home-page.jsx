import React, { useContext } from "react";
import { CartContext } from "../../context/context";
import Banner from "../banner/banner";
import Footer from "../footer/footer";
import ProductHeading from "../product-headings/product-heading";
import ProductPage from "../product-page/product-page";

const HomePage = () => {
    const GlobalState = useContext(CartContext)
    console.log(GlobalState)
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