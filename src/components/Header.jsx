import React, { useContext } from "react";
import { MenuDefault } from "./tools/dropDown";
import { UserContext } from "../store/authStore";
import netFlixLogo from "/assets/Netflix_Logo_PMS.png";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const { authUser, setAuthUser } = useContext(UserContext);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setAuthUser(null);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className= " md:absolute w-screen  mb-5  z-20 bg-black flex  md:justify-between  md:bg-transparent  md:bg-gradient-to-b	  md:from-black">
        <img className="w-48 mx-auto md:ml-32 md:mt-5 " src={netFlixLogo} alt="Logo" />

    { authUser && <div >
      <MenuDefault userData={authUser} logoutAction={handleLogout} />
    </div>}
      </div>
    </div>
  );
};

export default Header;
