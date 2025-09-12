"use client"
import GetUserCart from '@/API/GetUserCart/GetUserCart';
import React, { createContext, useEffect, useState } from 'react'


export const CartContext=createContext();

export default function CartContextProvider({children}) {
    const [countNumber,setcountNumber]=useState(0)
    async function getUserCart(){
        try{
            const res=await GetUserCart();
            if(res.status==="success"){
                let sum=0;
                res.data.products.forEach((product)=>{
                    sum+=product.count
                });
                setcountNumber(sum)
            }
        }catch(err){
        console.log("not login");
    }
    }
    useEffect(()=>{
        getUserCart();
    },[])
  return (
    <CartContext.Provider value={{countNumber,setcountNumber}}>
        {children}
    </CartContext.Provider>
  )
}
