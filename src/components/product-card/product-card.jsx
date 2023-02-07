import React from "react";
//import { Link } from 'react-router-dom'
import './product-card.css'

const ProductCard = ({item}) => {
    return (
        <>
            <section className="card-container"> 
                    <section className="card-image">
                        <img src={require('../../images/bag.png')} alt="product" />
                    </section>

                    <section className="card-description">
                        <span className="card-description-name">{item.name}</span>
                        <p className="card-description-para">{item.description}</p>
                        <span className="card-description-price">{item.price}</span>
                        <button>Buy Now</button>
                </section>

            </section>
        </>
    )
}

export default ProductCard