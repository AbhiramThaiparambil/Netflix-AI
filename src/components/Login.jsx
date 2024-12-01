import React, { useRef, useState } from "react";
import Header from "./Header";
import netFlixLogo from "../../public/assets/Netflix_Logo_PMS.png";
import backGroundImg from "../../public/assets/Login-Background.jpg";
import { validate } from "../utils/validate";


const Login = () => {
  const [isSignIn, setIssignIn] = useState(true);
  const [validateError,setError]=useState(null);
  const email=useRef(null)
  const password=useRef(null)
  const userName=useRef(null)
  const handileSignUp = () => {
    setIssignIn(!isSignIn);
  };

  const handilSumbitBtnClik=()=>{

       const isValidate = validate(email.current.value,password.current.value,userName?.current?.value )
       setError(isValidate)
       
       
       
  }
  return (
    <>
      {/* header */}
      <div className="">
        <div className="absolute w-48 ml-44 mt-5  ">
          <img src={netFlixLogo} alt="Logo" />
        </div>

        <img src={backGroundImg} alt="background" />

        <div className=" absolute top-32 left-0 right-0  w-[500px] bg-black  mx-auto py-10  px-16 bg-opacity-75 rounded-sm text-white h-[700px]">
          <h1 className="text-white font-bold mt-5 text-3xl mb-10 ">
            {isSignIn ? "Sign in" : "Sign UP"}
          </h1>
          <form action="" onSubmit={(e)=>e.preventDefault()}>
            {!isSignIn && (
              <input
                className="w-full p-3 mb-3 border border-gray-500 border-[0.5px] rounded-md"
                style={{ backgroundColor: "rgba(22, 22, 22, 0.7)" }}
                type="text"
                ref={userName}
                placeholder="Name"
              />
            )}
            <input
              className="w-full  p-3 border border-gray-500 border-[0.5px] rounded-md"
              style={{ backgroundColor: "rgba(22, 22, 22, 0.7)" }}
              type="text"
              ref={email}
              placeholder="Email"
            />
            <input
              className="w-full mt-3 p-3 border border-gray-500 border-[0.5px] rounded-md "
              style={{ backgroundColor: "rgba(22, 22, 22, 0.7)" }}
              type="password"
              ref={password}
              placeholder="Password"
            />
             <p className="text-red-400 font-bold">{ validateError }</p>
            <button onClick={()=> handilSumbitBtnClik()} className="bg-red-700 p-3 mt-9 w-full rounded-md">
              {isSignIn ? "Sign in" : "Sign UP"}
            </button>
            <p className="mt-5 cursor-pointer" onClick={() => handileSignUp()}>
              New to Netflix?
              <span className="font-semibold ps-1">
                {isSignIn ? "Sign up now " : "already have account"}{" "}
              </span>
              .
            </p>
            <p className="mt-5 font-sans text-gray-500 text-sm">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.{" "}
              <span className="text-sm text-blue-700 underline">
                Learn more.
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
