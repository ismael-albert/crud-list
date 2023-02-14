"use client";
import { Inter } from "@next/font/google";
import { useEffect, useState } from "react";
import { ListProducts } from "@/components/ListProducts";
import { IProduct } from "@/types";
import { Sidebar } from "@/components/Sidebar";
import { PostProduct } from "@/services/PostProduct";
import { SubmitHandler } from "react-hook-form";
import { DefaultButton } from "@/components/buttons/DefaultButton";
import { useForm } from "react-hook-form";
import { DeleteProduct } from "@/services/DeleteProduct";
import { UpdateProduct } from "@/services/UpdateProduct";
import { GetProducts } from "@/services/GetProducts";
import ModalProduct from "@/components/modals/ModalProduct";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [productsState, setProductsState] = useState([] as any);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
     GetProducts().then((res) => {
      setProductsState(res);
    }).catch((err) => console.log(err));
  }, []);

  const { register, handleSubmit, setValue } = useForm<IProduct>({
    defaultValues: {
      ID: "",
      title: "",
      content: "",
    },
  });

  const onSubmit: SubmitHandler<IProduct> = (data) => {
    if (data.ID) {
      UpdateProduct(data)
        .then((res) => {
          console.log("res", res);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          handleCloseModal();
        });
      return;
    }

  
    PostProduct(data)
      .then((res) => {
        console.log("Post");
      })
      .catch((err) => console.log(err))
      .finally(() => {
        handleCloseModal();
      });
    

  };

  const handleDelete = (id: string) => {
    DeleteProduct(id).then((res) => {
      setProductsState(
        productsState.filter((product: IProduct) => product.ID !== id)
      );
    });
  };
  const handleUpdate = (id: string) => {
    setShowModal(true);
    var objFind: any = productsState.find((item: IProduct) => item.ID === id);
    if (!objFind) return;
    setValue("ID", objFind.ID);
    setValue("title", objFind.title);
    setValue("content", objFind.content);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setValue("ID", "");
    setValue("title", "");
    setValue("content", "");
  };

  return (
    <main className="dark h-screen p-4">
      <div className="grid grid-cols-12 gap-4  h-full overflow-hidden">
        <div className="col-span-3 max-w-[300px]">
          <Sidebar />
        </div>
        <div className="col-span-8">
          <div className="flex justify-between items-center mb-5">
            <h1 className="text-2xl font-bold">Todos</h1>

            <button
              onClick={() => setShowModal(true)}
              className="bg-green-500 text-white px-4 py-2 rounded-md"
            >
              Adicionar
            </button>
            {showModal && (
              <ModalProduct>
                <div className="modal-background-fixed">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex justify-center items-center h-screen space-x-3 "
                  >
                    <div className="w-full max-w-2xl px-5 py-10 bg-white rounded-lg shadow dark:bg-gray-800">
                      <div className="mb-6 flex justify-between text-3xl font-light text-center text-gray-800 dark:text-white">
                        <div> titulo</div>
                        <svg
                          onClick={() => handleCloseModal()}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                          className="w-5 cursor-pointer fill-slate-100"
                        >
                          <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                        </svg>
                      </div>
                      <div className=" flex flex-col gap-4 ">
                        <div className="">
                          <div className=" relative ">
                            <input
                              type="text"
                              id="contact-form-name"
                              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                              placeholder="Titulo"
                              required
                              {...register("title")}
                            />
                          </div>
                        </div>

                        <div className="">
                          <label className="text-gray-700">
                            <textarea
                              className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                              id="comment"
                              placeholder="Enter your comment"
                              required
                              {...register("content")}
                            ></textarea>
                          </label>
                        </div>
                        <div className="col-span-2 text-right">
                          <DefaultButton type="submit">Enviar</DefaultButton>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </ModalProduct>
            )}
          </div>

          <ListProducts
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
            products={productsState}
          />
        </div>
      </div>
    </main>
  );
}
