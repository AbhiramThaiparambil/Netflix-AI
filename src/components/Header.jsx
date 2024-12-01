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
      <div className="absolute w-screen  flex justify-between">
        <img className="w-48 ml-44 mt-5" src={netFlixLogo} alt="Logo" />

        <div>
          <MenuDefault userData={authUser} logoutAction={handleLogout} />
        </div>
      </div>
    </div>
  );
};

export default Header;
