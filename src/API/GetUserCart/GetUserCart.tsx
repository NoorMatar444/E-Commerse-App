"use server"
import getMyToken from '@/Utilities/getMyToken';
import React from 'react'

export default async function GetUserCart() {
    const token = await getMyToken();
      if (!token) {
        throw new Error("No token found");
      }
    
      const res = await fetch('https://ecommerce.routemisr.com/api/v1/cart', {
        method: "GET",
        headers: {
          token: token,
          "Content-Type": "application/json"
        },
        
      });
    
      const payload = await res.json();
      return payload;

  
}
