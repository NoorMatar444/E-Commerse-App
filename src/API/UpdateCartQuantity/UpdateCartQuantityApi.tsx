"use server"
import getMyToken from '@/Utilities/getMyToken';


export default async function UpdateCartQuantityApi(id:string,count:string) {
      const token = await getMyToken();
      if (!token) {
        throw new Error("No token found");
      }
    
      const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
        method: "PUT",
        headers: {
          token: token,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ count:count })
      });
    
      const payload = await res.json();
      return payload;
}
