import React from "react";
//import { Link } from 'react-router-dom'
import heading from '../../data/heading.json'
import './product-heading.css'

const ProductHeading = () => {
 console.log(heading.heading[0].imageUrl)
    return (
        <>
            <section className="product-heading-container">
                {
                    heading.heading.map((item, index) => {
                        return (
                            <section key={index} className="product-heading" style={{backgroundColor:item.background}}>
                                <span>{item.name}</span>
                                <img src={item.imageUrl} alt={item.name} />
                                {/* <img src={require(""+ item.imageUrl)} alt={item.name} /> */}
                                {/* <img src={require('../../images/watch.png')} alt={item.name} /> */}
                            </section>
                        )
                    })
                }
            </section>
        </>
    )
}

export default ProductHeading