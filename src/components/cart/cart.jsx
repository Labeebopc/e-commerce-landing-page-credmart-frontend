import React, { useContext } from "react";
import { CartContext } from "../../context/context";
import './cart.css'

const Cart = () => {
    //Importing the context
    const GlobalState = useContext(CartContext)
    const state = GlobalState.state
    const dispatch = GlobalState.dispatch
    //console.log(state)
    

    return (
        <>
            <section className="cart-container">
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            {/* <th scope="col">No.</th> */}
                            <th scope="col">Item</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            state.map((item, index) => {
                                const price = parseInt(item.price.split('$')[1])
                                //console.log(price)
                                return (
                                    <tr key={index}>
                                        {/* <th scope="row">1</th> */}
                                        <td>{item.name}</td>
                                        <td>{`${item.price}`}</td>
                                        <td><button onClick={() =>dispatch({type:"DECREASEQTY",payload:item}) } className="quantity-btn">-</button>{item.quantity}<button onClick={() =>dispatch({type:"INCREASEQTY",payload:item}) } className="quantity-btn">+</button></td>
                                        <td>$ {`${item.quantity * price}`}</td>
                                        <td className="delete-item-btn" onClick={() =>dispatch({type:"REMOVE",payload:item}) }>X</td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                    {/* <tfoot>
                        <tr>
                            <th scope="row"></th>
                            <td className="fw-bold" colSpan="3">Grand Total</td>
                            <td className="fw-bold"> {`${0}`}</td>
                        </tr>
                    </tfoot> */}

                </table>

                {/* <button className="place-order-btn">Place Order</button> */}
            </section>
        </>
    )

}

export default Cart;