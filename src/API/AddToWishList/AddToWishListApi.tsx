"use server"
import getMyToken from '@/Utilities/getMyToken';
import React from 'react'

export default async function AddToWishListApi(productId) {
    try {
        const token = await getMyToken();
        if (!token) {
          throw new Error("No token found");
        }
        const res = await fetch("https://ecommerce.routemisr.com/api/v1/wishlist", {
          method: "POST",
          headers: {
            token: token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ productId }),
        });
    
        const payload = await res.json();
        return payload;
      } catch (err) {
        return err;
      }
}
