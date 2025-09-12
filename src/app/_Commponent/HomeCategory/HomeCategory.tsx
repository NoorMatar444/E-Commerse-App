import React from 'react'
import HomeCategorySlider from '../HomeCategorySlider/HomeCategorySlider';
import GetAllCategories from '@/API/GetAllCategories/GetAllCategoriesApi';



export default async function HomeCategory() {
    const data= await GetAllCategories();
    console.log(data);
  return (
    <>
      <HomeCategorySlider info={data}/>
    </>
  )
}
