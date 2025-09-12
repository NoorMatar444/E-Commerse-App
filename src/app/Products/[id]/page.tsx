import React from 'react'
import  Image  from 'next/image';
import AddBtn from '@/app/AddBtn/AddBtn';
export default async function ProductDetails({params}:{params:Promise<{id:string}>}) {

    const{id}=await params
    console.log(id)
    const response =await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
    const {data}= await response.json();
    console.log(data)
  return (
    <>
      <div className="container w-[80%] mx-auto p-4 flex items-center gap-10">
        <div className="first w-1/4">
          <Image src={data.imageCover} alt="image" width={200} height={200}/>
        </div>
        <div className="last w-3/4">
          <p>{data.title}</p>
          <p>{data.description}</p>
          <p>{data.category.name}</p>
           <div className="w-full flex justify-between">
            <span>{data.price} EGP</span>
            <span>
              <i className="text-yellow-400 fa-solid fa-star"></i>
              {data.ratingsAverage}
            </span>
          </div>
          <AddBtn id={id}/>
        </div>
      </div>
    </>
  )
}
