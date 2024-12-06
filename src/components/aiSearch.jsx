import React from "react";
import { language } from "../utils/constant";
const AiSearch = ({lang}) => {
  const {search,searchPlaceHolder}=language
  return (
    <div className=" w-1/2  p-5 mx-auto bg-black bg-opacity-60 rounded-sm flex">
      <form action="" >
        <input className="border pl-3 border-black h-10  py-3 w-[580px]  rounded-lg" placeholder={searchPlaceHolder[lang]} type="text"  />
         <button className="px-3  py-2 ml-5 rounded-lg text-white font-bold bg-red-700" >{search[lang]}</button>
      </form>
          
    </div>
  );
};

export default AiSearch;
