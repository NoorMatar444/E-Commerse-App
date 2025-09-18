"use server"


export default async function GetAllSubCateroriesApi() {
    const res=await fetch(`https://ecommerce.routemisr.com/api/v1/subcategories`)
    const {data}=await res.json();
    return data;
}
