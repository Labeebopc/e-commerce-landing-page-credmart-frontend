import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/context";
//import { Link } from 'react-router-dom'
import './product-card.css'

const ProductCard = ({ item }) => {
    const GlobalState = useContext(CartContext)
    //console.log(GlobalState)
    const dispatch = GlobalState.dispatch
    //Giving initial quantity of items as 1
    item.quantity = 1

    //Codes to navigate cart after clicking "BUY NOW"
    const navigate = useNavigate()
    const handleBuy = () => {
        navigate("/cart")
    }


    return (
        <>
            <section className="card-container">
                <section className="card-image">
                    <img src={item.productImage} alt="product" />
                    {/* <img src={require(""+ item.image)} alt="product" /> */}
                </section>

                <section className="card-description">
                    <span className="card-description-name">{item.name}</span>
                    <p className="card-description-para">{item.description}</p>
                    <span className="card-description-price">{item.price}</span>
                    <button onClick={() => { dispatch({ type: "ADD", payload: item }); handleBuy() }}>Buy Now</button>
                </section>

            </section>
        </>
    )
}

export default ProductCard