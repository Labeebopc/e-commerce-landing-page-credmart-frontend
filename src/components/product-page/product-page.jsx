import React, { useEffect, useState } from "react";
//import { Link } from 'react-router-dom'
import axios from 'axios'
import products from '../../data/data.json'
import ProductCard from "../product-card/product-card";

import './product-page.css'

const ProductPage = (props) => {

    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {

        const getDatafromBackend = async () => {
            let result = await axios.get("http://localhost:5000/api/v1/products")
            setAllProducts(result.data)
            //console.log(result);
        }

        getDatafromBackend()

    }, [])

    //console.log(Object.values(products))
    console.log(allProducts);
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