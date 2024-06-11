import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const storeContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItem, setCartItem] = useState({})

    const addToCart = (itemId) => {
        if (!cartItem[itemId]) {
            setCartItem((prev) => ({ ...prev, [itemId]: 1 }))
        } else {
            setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }

    }

    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getTotalCartAmount =()=>{
        let totalAmount=0;
        for(const item in cartItem){
            if(cartItem[item] > 0){
                let itemInfo = food_list.find((product)=>product._id === item)
                totalAmount += itemInfo.price *cartItem[item]
            }
            
        }
        return totalAmount;
    }
    const contextvalue = {
        food_list,
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }
    return (
        <storeContext.Provider value={contextvalue}>
            {props.children}
        </storeContext.Provider>

    )
}
export default StoreContextProvider 