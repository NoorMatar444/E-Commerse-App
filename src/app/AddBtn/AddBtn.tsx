"use client"
import AddToCart from '@/API/AddToCart/AddToCart';
import AddToWishListApi from '@/API/AddToWishList/AddToWishListApi';
import { Button } from '@/components/ui/button'

import React, { useContext } from 'react'
import { CartContext } from './../CartContextProvider/CartContextProvider';

export default function AddBtn({id}) {
   const {countNumber,setcountNumber}=useContext(CartContext);
    async function reciveAddToCartApi(id){
        const data=await AddToCart(id);
        if(data.status==="success"){
            console.log("Added sucessful")
            setcountNumber(countNumber+1);
        }else{
            console.log("error")
        }
    }
     async function reciveAddToWishListApi(id){
        const data=await AddToWishListApi(id);
        if(data.status==="success"){
            console.log("Added sucessful")
        }else{
            console.log("error")
        }
    }

  return (
    <div>
      <Button className='w-full bg-yellow-400 text-white' onClick={()=>reciveAddToWishListApi(id)} variant="outline">Add to wish list</Button>
      <Button className='w-full bg-black text-white' onClick={()=>reciveAddToCartApi(id)} variant="outline">Add to cart</Button>
    </div>
  )
}
