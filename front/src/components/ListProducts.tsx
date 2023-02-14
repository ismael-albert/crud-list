import { IProduct } from "@/types";
import { useEffect, useState } from "react";
import { DefaultButton } from "./buttons/DefaultButton";
import { DateTime } from "luxon";

const ListProducts: React.FC<{ products: IProduct[], handleUpdate: (id: string) => void, handleDelete: (id: string) => void }> = ({ products, handleDelete, handleUpdate }) => {
  const [productsState, setProductsState] = useState([] as IProduct[]);

  useEffect(() => {
    if(!products) return;
    setProductsState([...products]);
  }, [products]);
 
  return (
    <div className="grid grid-cols-3 w-full gap-4 ">
   

      {productsState.map((product: IProduct, index: number) => (
        <div
          key={index}
          className="flex col-span-1 flex-col justify-between relative max-w-full p-4 overflow-hidden bg-white shadow-lg rounded-xl dark:bg-gray-800"
        >
          <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
            {product.title}
          </p>
          <p className="mb-2 text-xs font-medium text-gray-400 dark:text-gray-300">
            -{" "}
            {DateTime.fromISO(product.CreatedAt as string).toFormat(
              "dd/MM/yyyy"
            )}
          </p>
          <p className="mb-4 text-sm text-gray-400 dark:text-gray-300">
            {product.content}
          </p>

          <div className="flex gap-4 justify-between">
            <DefaultButton
              onClick={() => {
                handleUpdate(product.ID);
              }}
              className="w-[100px] leading-none py-2 bg-blue-400 rounded-md flex justify-center"
            >
              Editar
            </DefaultButton>
            <DefaultButton
              onClick={() => {
                handleDelete(product.ID);
              }}
              className="w-[40px] leading-none py-2 bg-red-500 rounded-md flex justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-4 fill-white"
              >
                <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
              </svg>
            </DefaultButton>
          </div>
        </div>
      ))}
    </div>
  );
};
export { ListProducts };
