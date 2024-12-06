import React, { useContext } from "react";
import { MenuDefault } from "./tools/dropDown";
import { UserContext } from "../store/authStore";
import netFlixLogo from "/assets/Netflix_Logo_PMS.png";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { enableAiSearch } from "../store/ConfigSlice";

const Header = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { authUser, setAuthUser } = useContext(UserContext);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setAuthUser(null);
        navigate("/");
      })
      .catch((error) => {
        error;
      });
  };
  return (
    <div>
      <div className=" md:absolute w-screen  mb-5  z-20 bg-black flex  md:justify-between  md:bg-transparent  md:bg-gradient-to-b	  md:from-black">
        <img
          className="w-48 mx-auto md:ml-32 md:mt-5 "
          src={netFlixLogo}
          alt="Logo"
        />

       
        <button
          className="  h-10 rounded-lg px-4 mt-[2.5rem] mr-10  text-white  font-bold bg-purple-400   "
          onClick={() => dispatch(enableAiSearch())}
        >
          AI search
        </button>
        {authUser && (
          <div>
            <MenuDefault userData={authUser} logoutAction={handleLogout} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
