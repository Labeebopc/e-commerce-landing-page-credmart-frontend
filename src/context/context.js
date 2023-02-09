import { createContext, useReducer } from "react";

export const CartContext = createContext()

//Creating context
export const Context = (props) => {


    //Function to update the state in context
    const updateValue = (state, action) => {

        switch (action.type) {

            case "ADD":
                const filterUniqueItem = state.filter((item) => action.payload.id === item.id)
                if (filterUniqueItem.length > 0) {
                    return state
                }
                return [...state, action.payload]

            case "DECREASEQTY":
                const decreaseItem = state.map((item) => {

                    if (item.id === action.payload.id) {
                        return { ...item, quantity: item.quantity - 1 }
                    }

                    else return item
                })

                return decreaseItem;

            case "INCREASEQTY":

                const increaseItem = state.map((item) => {
                    if (item.id === action.payload.id) {
                        return { ...item, quantity: item.quantity + 1 }
                    }

                    else return item
                })
                return increaseItem


            case "REMOVE":

                const removeItem = state.filter((item) => item.id !== action.payload.id)
                return removeItem


            default: return state
        }
    }


    //const [state, dispatch] = useReducer(updateValue, initialValue)
    const [state, dispatch] = useReducer(updateValue, [])

    const info = { state, dispatch }

    return (
        <CartContext.Provider value={info}>
            {
                props.children
            }
        </CartContext.Provider>
    )
}