
import {IProduct} from "@/types";

export async function PostProduct(data: IProduct) {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products`,
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then((res) => res.json())
    .catch((err) => console.log(err))
    return;
}
