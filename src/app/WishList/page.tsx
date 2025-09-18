"use client";
import DeleteWishListApi from "@/API/DeleteWishList/DeleteWishListApi";
import GetUserWishListApi from "@/API/GetUserWishList/GetUserWishListApi";
import React, { useEffect, useState } from "react";
import  Image  from 'next/image';
import { GetUserWishListType } from "@/types/GetUserWishListType.type";


export default function WishList() {
  const [products, setProducts] = useState([]);
  const [isLoading,setIsLoading]=useState(false);
  const [currentId,setCurrentId]=useState("")
  async function WishListApi() {
    const { data } = await GetUserWishListApi();
    console.log(data);
    setProducts(data);
  }
  async function deleteItem(id:string) {
    setCurrentId(id)
    setIsLoading(true)
    const data = await DeleteWishListApi(id);
    console.log(data);
    WishListApi();
    setIsLoading(false);
  }
  useEffect(() => {
    WishListApi();
  }, []);
  return (
    <>
      <div className="container w-[80%] mx-auto ">
        {products.map((product:GetUserWishListType) => (
          <tr
            key={product._id}
            className="w-full flex justify-center items-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <td className="p-4">
              <Image
                width={500}
                height={500}
                src={product.imageCover}
                className="w-16 md:w-32 max-w-full max-h-full"
                alt="Apple Watch"
              />
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              {product.title}
            </td>

            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              {product.price}
            </td>
            <td className="px-6 py-4">
              {currentId===product._id?isLoading?<i className="fa-solid fa-circle-notch fa-spin"></i>:<button className="bg-red-700 text-white p-3 rounded-3xl w-25 cursor-pointer" onClick={() => deleteItem(product.id)}>Rmove</button>:<button className="bg-red-700 text-white p-3 rounded-3xl w-25 cursor-pointer" onClick={() => deleteItem(product.id)}>Rmove</button>}
            </td>
          </tr>
        ))}
      </div>
    </>
  );
}
