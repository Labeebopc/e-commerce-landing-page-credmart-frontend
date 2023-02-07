import React from "react";
import './footer.css'
const Footer = () => {
    return (
        <>
            <section className="footer-container">
                <h3 className="footer-container-heading">LET'S STAY IN TOUCH</h3>
                <span>Get updates</span>
                <input type="text" placeholder="Enter your email" />
                <button>Send</button>
            </section>
        </>
    )
}

export default Footer;