import GetAllSubCateroriesApi from "@/API/GetAllSubCaterories/GetAllSubCateroriesApi";
import React from "react";
import Link from "next/link";
import SubCategories from "./../subCategories/subCategories";
import { CategoryType } from "@/types/Category.type";


export default async function Categories() {
  const data = await GetAllSubCateroriesApi();
  console.log(data);
  return (
    <>
      <div className="container w-[80%] mx-auto ">
        {data.map((category:CategoryType) => (
          <div className="items" key={category._id}>
            <Link href={`/Categories/${category._id}`}>
              <div className="category">
                <h1 className="text-4xl my-4">{category.name}</h1>
                <SubCategories id={category._id}/>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
