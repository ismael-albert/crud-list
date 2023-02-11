import { useForm, SubmitHandler } from "react-hook-form";
import { IFormInput } from "@/types";
import { UpdateProduct } from "@/services/UpdateProduct";
import { DefaultButton } from "../buttons/DefaultButton";
import { useEffect, useState } from "react";


const UpdateForm = (props: any) => {

  const {isOpen,title, onClose, product } = props;
  const [state , setState] = useState({...product});
  const { register, handleSubmit } = useForm<IFormInput>({
      defaultValues: {
        Title: state.title,
        Content: state.content,
      }
    });

  console.log('props');
  useEffect(() => {
    setState(product);
    console.log(product);
  }, [product]);

  const onSubmit: SubmitHandler<any> = (data) => {
    UpdateProduct(data, product.ID).then((res) => {
      console.log(res);
    });
  };

    return (

        
      
    <div className={`${ isOpen ? "" : "hidden" } fixed z-30 inset-0 overflow-y-auto bg-slate-700 bg-opacity-80`}>
        <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center items-center h-screen space-x-3 ">
          <div className="w-full max-w-2xl px-5 py-10 bg-white rounded-lg shadow dark:bg-gray-800">
            <div className="mb-6 flex justify-between text-3xl font-light text-center text-gray-800 dark:text-white">
              <div> {title}</div>
             <svg
              onClick={onClose}
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-6 cursor-pointer fill-slate-100"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>
            </div>
            <div className=" flex flex-col gap-4 ">
              <div className="">
                <div className=" relative ">
                  <input
                    type="text"
                    id="contact-form-name"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Titulo"
                    {...register("Title")}
                  />
                </div>
              </div>
             
              <div className="">
                <label className="text-gray-700">
                  <textarea
                    className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    id="comment"
                    placeholder="Enter your comment"
                    {...register("Content")}
                  ></textarea>
                </label>
              </div>
              <div className="col-span-2 text-right">
             
                <DefaultButton 
                type="submit">Enviar</DefaultButton>
              </div>
            </div>
          </div>
        </form>
      
    </div>
   
  );
};
export { UpdateForm };
