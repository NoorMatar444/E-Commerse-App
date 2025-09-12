"use server"
import getMyToken from '@/Utilities/getMyToken'
import axios from 'axios';
import React from 'react'

export default async function GetUserAddressApi() {
    const token=await getMyToken()
     const {data}= await axios.get("https://ecommerce.routemisr.com/api/v1/addresses",{
        headers:{
          token:token,
          "Content-Type":"application/json"
        }
      });
      return data;
}
