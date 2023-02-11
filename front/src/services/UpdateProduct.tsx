import {IProduct} from '@/types';

export async function UpdateProduct(props: any, ID: any) {
    const {Title, Content} = props;

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products/${ID}`, {
        method: "PUT",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
        Title,
        Content,

        }),
    });
    const data = await response.json();
    return data;
}