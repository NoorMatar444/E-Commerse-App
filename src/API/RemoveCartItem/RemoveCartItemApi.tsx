"use server"
import getMyToken from '@/Utilities/getMyToken';


export default async function RemoveCartItemApi(id:string) {
   const token = await getMyToken();
        if (!token) {
          throw new Error("No token found");
        }
      
        const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
          method: "DELETE",
          headers: {
            token: token,
            "Content-Type": "application/json"
          },
          
        });
      
        const payload = await res.json();
        return payload;
  
}
