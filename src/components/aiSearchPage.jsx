import React,{useState} from 'react'
import AiSearch from './Aisearch'
import backGroundImg from "/assets/Login-Background.jpg";

const AiSearchPage = () => {
    const [lang,setLang]=useState('en-us')
   
    
  return (
    
    <div className='pt-[7%] '>
        <img src={backGroundImg} className='absolute -z-10 -mt-24  brightness-50' alt="" />
        <select onChange={(e)=>setLang(e.target.value)} className="ml-[85%] h-7 rounded-sm  px-1    bg-black text-white border-none outline-none">
          <option value="en-us">EN-US</option>
          <option value="mal-in">MAL-IN</option>
        </select>

      <AiSearch lang={lang}/>
     
    </div>
  )
}

export default AiSearchPage
