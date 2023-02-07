import React from "react";
import './contactUs.css'
const ContactUs = () => {
    return (
        <>
            <section className="contactUs-container">
                <h3 className="contactUs-container-heading">LET'S STAY INTOUCH</h3>
                <span>Get updates</span>
                <input type="text" placeholder="Enter your email" />
                <button>Send</button>
            </section>
        </>
    )
}

export default ContactUs