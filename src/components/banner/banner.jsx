import React from "react";
//import { Link } from 'react-router-dom'
import './banner.css'

const Banner = () => {

    const handleBannerBtn = () => {
        alert("Offer will be updated. Kindly Buy below listed Items")
    }

    return (
        <>
            <section className="banner-container">
                <article className="banner-description">
                    <h4>X-Box For Living Room</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, numquam aspernatur quo neque doloremque ratione repellendus placeat. Minima magnam saepe obcaecati soluta.</p>

                    <div className="banner-description-price">
                        <span> $600</span>
                        <button onClick={handleBannerBtn}>Buy Now</button>
                    </div>
                </article>

                <article className="banner-image">
                    <img src={require('../../images/jbl.png')} alt="banner" />
                </article>

            </section>
        </>
    )
}

export default Banner