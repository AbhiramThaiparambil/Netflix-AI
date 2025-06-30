
function videoTitle({title,overview}) {
 
    
  return(
     <div className="absolute w-screen pl-20 text-white pt-72 aspect-video bg-gradient-to-r from-black/65 to-transparent "  >
        <h1 className="mr-0 -mt-40 text-5xl font-bold md:mt-0 md:mr-6">{title}</h1>
        <p className="hidden w-4/12 pt-4 mr-6 text-sm  md:block">{overview}</p>
        <button className="py-2 mt-6 text-black bg-white rounded-lg px-11 hover:opacity-30"><i className="fa-solid fa-play" style={{color: "#000000"}}></i> Play</button>
        <button className="px-8 py-2 mt-6 ml-4 text-white rounded-sm  bg-slate-500 bg-opacity-30">🛈More info</button>
     </div>
  
  )
}

export default videoTitle;
