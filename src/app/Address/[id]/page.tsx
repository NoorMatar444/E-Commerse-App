import getMyToken from '@/Utilities/getMyToken';
import React from 'react'

export default async function DynamicAddress({params}:{params:Promise<{id:string}>}) {
    const{id}=await params
    
        const token = await getMyToken();
        if (!token) {
          throw new Error("No token found");
        }
    
        const res = await fetch(`https://ecommerce.routemisr.com/api/v1/addresses/${id}`, {
          method: "GET",
          headers: {
            token: token,
            "Content-Type": "application/json",
          },
        });
    
        const {data} = await res.json();
       console.log(data);
      return (
        <>
             <div className="card border-2 my-6">
                  <h1>{data.name}</h1>
                  <p>{data.details}</p>
                  <p>{data.city}</p>
                  <p>{data.phone}</p>
                </div>
        </>
      )
}
