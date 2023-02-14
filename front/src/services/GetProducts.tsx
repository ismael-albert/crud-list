import { IProduct } from "@/types";

export async function GetProducts() {
 
   const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      const resData = await response.json();
return resData;
      
    
}