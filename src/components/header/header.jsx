import React from "react";
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                {/* <Link className="navbar-brand " to="#">Home</Link> */}

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <section className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Shoes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Backpacks</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Contact</Link>
                        </li>

                    </ul>
                </section>
                <article className="cart-icon">
                    <Link to="/cart"><i className="fa-solid fa-cart-shopping"></i></Link>
                    </article>
            </nav>
        </>
    )
}

export default Header