import React from 'react'
import  Image  from 'next/image';

export default async function DynamicBrand({params}) {
    const{id}=await params
    const res=await fetch(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)
    const {data}=await res.json()
    console.log(data)
  return (
    <>
      <div className="container w-[80%] h-screen mx-auto  flex justify-center items-center my-5 ">
        <div className="image">
            <Image src={data.image} width={300} height={300}  alt="image"/>
        </div>
        <div className="name bg-amber-500 w-full flex justify-center items-center">
            <h1 className='text-6xl font-bold'>{data.name}</h1>
        </div>
      </div>
    </>
  )
}
