 export async function DeleteProduct(id: string) {
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products/${id}`, {
        method: "DELETE",
        headers: {
        "Content-Type": "application/json",
        },
    }). then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
        
    
 }