import {IButtonProps} from "@/types"
const ThemeButton = (props: IButtonProps) => {
    const { children, ...rest } = props;
    return (
        <button
        {...props}
        type={props.type ? props.type : "button"}
        className={`${
            props.className ? props.className : "py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
        }`}
        onClick={() => {
            document.getElementsByTagName('main')[0].classList.toggle('white')
          }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={40}><path d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zm64 0c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256z"/></svg>

        </button>
    );
    };
    export { ThemeButton}