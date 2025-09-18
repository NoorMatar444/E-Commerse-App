"use server"


export default async function GetProducts() {
  const response = await fetch("https://ecommerce.routemisr.com/api/v1/products");
  const { data } = await response.json();
  return data;
}