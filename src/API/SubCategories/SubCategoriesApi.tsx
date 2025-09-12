import React from 'react'

export default async function SubCategoriesApi(id) {
    const res=await fetch(`https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`);
    const data=await res.json();
    return data;
}
