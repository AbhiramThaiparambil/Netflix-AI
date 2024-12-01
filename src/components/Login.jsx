import React, { useRef, useState, useContext } from "react";
import Header from "./Header";
import backGroundImg from "/assets/Login-Background.jpg";
import { validate } from "../utils/validate";
import { UserContext } from "../store/authStore";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignIn, setIssignIn] = useState(true);
  const [validateError, setError] = useState(null);
  const { authUser, setAuthUser } = useContext(UserContext);

  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);
  const handileSignUp = () => {
    setIssignIn(!isSignIn);
  };

  const handilSumbitBtnClik = () => {
    const isValidate = validate(
      email.current.value,
      password.current.value,
      userName?.current?.value
    );
    setError(isValidate);

    if (validateError === null && !isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: userName?.current?.value,
          })
            .then(() => {
              toast.success("sign up successfully!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Flip,
              });

              setAuthUser({
                displayName: user.displayName,
                email: user.email,
                uid: user.uid,
              });

              navigate("/browse");
            })
            .catch((e) => setError(e.message));
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "--" + errorMessage);
        });
    } else if (validateError === null && isSignIn) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          setAuthUser({
            displayName: user.displayName,
            email: user.email,
            uid: user.uid,
          });
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setError(error.message);
        });
    }
  };
  return (
    <>
      {/* header */}
      <div className="">
        <Header />

        {/* toast  */}
        <ToastContainer />
        <img src={backGroundImg} alt="background" />

        <div className=" absolute top-32 left-0 right-0  w-[500px] bg-black  mx-auto py-10  px-16 bg-opacity-75 rounded-sm text-white h-[700px]">
          <h1 className="text-white font-bold mt-5 text-3xl mb-10 ">
            {isSignIn ? "Sign in" : "Sign UP"}
          </h1>
          <form action="" onSubmit={(e) => e.preventDefault()}>
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
            <p className="text-red-400 font-bold">{validateError}</p>
            <button
              onClick={() => handilSumbitBtnClik()}
              className="bg-red-700 p-3 mt-9 w-full rounded-md"
            >
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
