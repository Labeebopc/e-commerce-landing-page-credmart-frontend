import React from "react";
//import { Link } from 'react-router-dom'
import mainHeading from '../../data/heading.json'
import './product-heading.css'

const ProductHeading = () => {

    return (
        <>
            <section className="product-heading-container">
                {
                    mainHeading.heading.map((item, index) => {
                        return (
                            <section key={index} className="product-heading" style={{backgroundColor:item.background}}>
                                <span>{item.name}</span>
                                {/* <img src={item.image} alt={item.name} /> */}
                                {/* <img src={require(""+ item.image)} alt={item.name} /> */}
                                <img src={require('../../images/watch.png')} alt={item.name} />
                            </section>
                        )
                    })
                }
            </section>
        </>
    )
}

export default ProductHeading