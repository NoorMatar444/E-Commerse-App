"use server"
import React from 'react'

export default async function GetAllBrands() {
    const res=await fetch('https://ecommerce.routemisr.com/api/v1/brands');
    const data=res.json();
    return data;
}
