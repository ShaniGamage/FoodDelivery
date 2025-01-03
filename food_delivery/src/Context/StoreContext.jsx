import { createContext, useEffect } from "react";
import { useState } from 'react'
import { food_list } from "../frontend_assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider=(props)=>{

        const[cartItems,setCartItems]=useState({});

        const url = "http://localhost:5000"
        const [token,setToken] = useState("")

        const addToCart=(itemId)=>{
            if(!cartItems[itemId]){
                setCartItems((prev)=>({...prev,[itemId]:1}))
            }
            else{
                setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
            }
        };
    

    const removeFromCart =(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    };

    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems){
            if(cartItems[item]>0){

                //if product.id is matching with the item, it means that product is available in the cart
                let itemInfo=food_list.find((product)=>product.id===item);

               //product price * quantity to get total
               totalAmount+=itemInfo.price*cartItems[item];

            }
        }
        return totalAmount;
    }


    const contextValue={
       food_list,
       cartItems,
       setCartItems,
       addToCart,
       removeFromCart,
       getTotalCartAmount,
       url,
       token,
       setToken
    };
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
};

export default StoreContextProvider