import {IProduct} from '@/types';

export async function UpdateProduct (data:IProduct) {
 

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products/${data.ID}`, {
        method: "PUT",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const resData = await response.json();
    return resData;
}