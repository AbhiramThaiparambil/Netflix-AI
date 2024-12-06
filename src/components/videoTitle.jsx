import React from "react";

function videoTitle({title,overview}) {
 
    
  return(
     <div className="pt-72 pl-20 aspect-video absolute text-white w-screen bg-gradient-to-r from-black/65 to-transparent  "  >
        <h1 className="font-bold text-5xl md:mt-0 md:mr-6 mr-0 -mt-40">{title}</h1>
        <p className=" hidden md:block w-4/12 text-sm mr-6 pt-4">{overview}</p>
        <button className="py-2 mt-6 bg-white text-black px-11 rounded-lg hover:opacity-30"><i className="fa-solid fa-play" style={{color: "#000000"}}></i> Play</button>
        <button className=" ml-4 py-2 mt-6 bg-slate-500 text-white px-8 rounded-sm bg-opacity-30">🛈More info</button>
     </div>
  
  )
}

export default videoTitle;
