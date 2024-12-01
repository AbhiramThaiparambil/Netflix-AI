import React from "react";

function videoTitle({title,overview}) {
    console.log(title);
    
  return(
     <div className="pt-72 pl-20 w-4/12"  >
        <h1 className="font-bold text-5xl mr-6">{title}</h1>
        <p className=" text-sm mr-6 pt-4">{overview}</p>
        <button className="py-2 mt-6 bg-black text-white px-11 rounded-lg">▶Play</button>
        <button className=" ml-4 py-2 mt-6 bg-slate-500 text-white px-8 rounded-sm bg-opacity-30">🛈More info</button>
     </div>
  
  )
}

export default videoTitle;
