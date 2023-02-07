import React from "react";
import './cart.css'

const Cart = () => {
    return (
        <>
            <section className="cart-container">
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Item</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Bag</td>
                            <td>$ {`${99}`}</td>
                            <td><button className="quantity-btn">-</button>1<button className="quantity-btn">+</button></td>
                            <td>$ {`${99}`}</td>
                        </tr>

                    </tbody>
                    <tfoot>
                        <tr>
                            <th scope="row"></th>
                            <td className="fw-bold" colSpan="3">Grand Total</td>
                            <td className="fw-bold">$ {`${99}`}</td>
                        </tr>
                    </tfoot>

                </table>

                <button className="place-order-btn">Place Order</button>
            </section>
        </>
    )
}

export default Cart