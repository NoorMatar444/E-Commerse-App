import SubCategoriesApi from '@/API/SubCategories/SubCategoriesApi'
import React from 'react'

export default async function SubCategories({id}:{id:string}) {
    const data=await SubCategoriesApi(id)
    console.log(data)
  return (
    <div>
      
    </div>
  )
}
