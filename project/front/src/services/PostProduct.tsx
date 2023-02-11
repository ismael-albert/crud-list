
import {IFormInput} from "@/types";

export async function PostProduct(data: IFormInput) {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products`,
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then((res) =>  true)
    .catch((err) => err)
}
