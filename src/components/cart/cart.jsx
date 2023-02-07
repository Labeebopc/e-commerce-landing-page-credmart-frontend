import React, { useState } from "react";
import './cart.css'

const Cart = () => {
    const [count, setCount] = useState(1)

    const checkCount = (type) => {

        switch (type) {
            case "Decrement":
                if (count >= 1) {
                    setCount(count - 1)
                }

                else {
                    setCount(0)
                }
                break;

            case "Increment":

                setCount(count + 1)

                break;

            default:
                setCount(count)

        }
    }
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
                                <td><button onClick={() => checkCount("Decrement")} className="quantity-btn">-</button>{count}<button onClick={() => checkCount("Increment")} className="quantity-btn">+</button></td>
                                <td>$ {`${count*99}`}</td>
                            </tr>

                        </tbody>
                        <tfoot>
                            <tr>
                                <th scope="row"></th>
                                <td className="fw-bold" colSpan="3">Grand Total</td>
                                <td className="fw-bold">$ {`${count*99}`}</td>
                            </tr>
                        </tfoot>

                    </table>

                    <button className="place-order-btn">Place Order</button>
                </section>
            </>
        )
    
}

export default Cart;