import { CheckOutSchemaType } from '@/schema/CheckOut.schema';
import getMyToken from '@/Utilities/getMyToken'
import React from 'react'

export default async function OnlinePayment(id:string,url=process.env.NEXT_URL,values:CheckOutSchemaType) {
    const token=await getMyToken();
    if(!token){
        throw new Error("No token");
    }
    const res=await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=${url}`,{
        method:"POST",
        headers:{
            token:token,
            "Content-Type":"application/json",
        },
        body:JSON.stringify({shippingAddress:values})
    })
    const payload=await res.json();
    return payload;
}
