import {useState} from 'react'
import backGroundImg from "/assets/Login-Background.jpg";
import AiSearch from './AiSearch';
const AiSearchPage = () => {
    const [lang,setLang]=useState('en-us')
   
    
  return (
    
    
    <div
    className="relative pt-[7%] min-h-screen bg-cover bg-center brightness-105"
    style={{ backgroundImage: `url(${backGroundImg})` }}
  >
        <select onChange={(e)=>setLang(e.target.value)} className="ml-[85%] h-7 rounded-sm  px-1    bg-black text-white border-none outline-none">
          <option value="en-us">EN-US</option>
          <option value="mal-in">MAL-IN</option>
        </select>

      <AiSearch lang={lang}/>
     
    </div>
  )
}

export default AiSearchPage
