import React from "react";
//import { Link } from 'react-router-dom'
import products from '../../data/data.json'
import ProductCard from "../product-card/product-card";

import './product-page.css'

const ProductPage = (props) => {
    //console.log(Object.values(products))
    return (
        <>
            <section className="product-page-container">
                <h4>{props.heading}</h4>

                <section className="products">

                    {props.heading === "Shoes" &&

                        products.Shoes.map((item, index) => {
                            return (
                                <ProductCard item={item} key={index} />
                            )
                        })
                    }

                    {props.heading === "Backpacks" &&

                        products.Bag.map((item, index) => {
                            return (
                                <ProductCard item={item} key={index} />
                            )
                        })
                    }

                </section>
            </section>
        </>
    )
}

export default ProductPage