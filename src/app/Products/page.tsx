import React from 'react'
import GetSinglePost from '../GetSinglePost/GetSinglePost';
import { ProductType } from './../../types/Product.type';
import GetProducts from '@/API/GetProducts/GetProductsApi';
export default async function Products() {
  const data= await GetProducts();
  return (
    <>
      <div className="container w-[80%] mx-auto my-7">
          <div className='flex flex-wrap gap-5'>
            {data.map((currentProduct:ProductType)=>( <div className='w-1/5' key={currentProduct.id}>
              <GetSinglePost product={currentProduct} />
            </div>))}
          </div>
      </div>
    </>
  )
}
