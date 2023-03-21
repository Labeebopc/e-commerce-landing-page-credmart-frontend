import React, { useEffect, useState } from "react";
//import { Link } from 'react-router-dom'
import axios from 'axios'
//import products from '../../data/data.json'
import ProductCard from "../product-card/product-card";

import './product-page.css'

const ProductPage = (props) => {

    // const [data, setData] = useState({})
    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {

        if (props.heading === "Shoes") {
            const getDatafromBackend = async () => {
                let result = await axios.get("https://ecommerce-landing-page-credmat-backend.onrender.com/api/v1/products")
                setAllProducts(result.data.Shoes)
                //console.log(result);
            }

            getDatafromBackend()
        }

        else {
            const getDatafromBackend = async () => {
                let result = await axios.get("https://ecommerce-landing-page-credmat-backend.onrender.com/api/v1/products")
                setAllProducts(result.data.Bag)
                //console.log(result);
            }

            getDatafromBackend()
        }

    }, [props.heading])

    //console.log(Object.values(products))
    // console.log(allProducts, "backend");
    // console.log(products, "json");
    return (
        <>
            <section className="product-page-container">
                <h4>{props.heading}</h4>

                <section className="products">

                    {/* {allProducts.length > 0 && props.heading === "Shoes" &&

                        allProducts.map(item => {
                            console.log(item, "inside");
                            return (
                                <ProductCard item={item} key={item.id} />
                            )
                        })
                    }

                    {allProducts.length > 0 && props.heading === "Backpacks" &&

                        allProducts.map(item => {
                            return (
                                <ProductCard item={item} key={item.id} />
                            )
                        })
                    } */}

                    {allProducts.length > 0 &&

                        allProducts.map(item => {
                            //console.log(item, "inside");
                            return (
                                <ProductCard item={item} key={item.id} />
                            )
                        })
                    }


                </section>
            </section>
        </>
    )
}

export default ProductPage