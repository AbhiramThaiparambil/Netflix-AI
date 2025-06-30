import { useRef, useState, useContext } from "react";
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
  const [validateError, setError] = useState(' ');
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
      <div className="bg-black">
        <Header />

        {/* toast  */}
        <ToastContainer />
        <img
          className="object-cover h-screen md:h-auto md:object-none"
          src={backGroundImg}
          alt="background"
        />

        <div className="  absolute top-32 left-0 right-0 h-[600px]  w-11/12  bg-black  mx-auto py-10  px-16 bg-opacity-75 rounded-sm text-white  md:w-[500px] md:h-[700px] md:-mt-10">
          <h1 className="mt-5 mb-10 text-3xl font-bold text-white ">
            {isSignIn ? "Sign in" : "Sign UP"}
          </h1>
          <form action="" onSubmit={(e) => e.preventDefault()}>
            {!isSignIn && (
              <input
                className="w-full p-3 mb-3  border-gray-500 border-[0.5px] rounded-md"
                style={{ backgroundColor: "rgba(22, 22, 22, 0.7)" }}
                type="text"
                ref={userName}
                placeholder="Name"
              />
            )}
            <input
              className="w-full  p-3  border-gray-500 border-[0.5px] rounded-md"
              style={{ backgroundColor: "rgba(22, 22, 22, 0.7)" }}
              type="text"
              ref={email}
              placeholder="Email"
            />
            <input
              className="w-full mt-3 p-3  border-gray-500 border-[0.5px] rounded-md "
              style={{ backgroundColor: "rgba(22, 22, 22, 0.7)" }}
              type="password"
              ref={password}
              placeholder="Password"
            />
            <p className="font-bold text-red-400">{validateError}</p>
            <button
              onClick={() => handilSumbitBtnClik()}
              className="w-full p-3 bg-red-700 rounded-md mt-9"
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
            <p className="mt-5 font-sans text-sm text-gray-500">
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
