import { useContext, useEffect } from "react";
import { MenuDefault } from "./tools/dropDown";
import { UserContext } from "../store/authStore";
import netFlixLogo from "/assets/Netflix_Logo_PMS.png";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { enableAiSearch } from "../store/ConfigSlice";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();

  const { authUser, setAuthUser } = useContext(UserContext);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser({
          displayName: user.displayName,
          email: user.email,
          uid: user.uid,
        });
        navigate("/browse");
      } else {
        setAuthUser(null);
      }
    });
    return () => unsubscribe();
  }, [setAuthUser]);

  const dispatch = useDispatch();

  const aiSearch = useSelector((store) => store.Config?.aiSearch);

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
      <div className="z-20 flex w-screen mb-5 bg-black  md:absolute md:justify-between md:bg-transparent md:bg-gradient-to-b md:from-black">
        <img
          className="w-48 mx-auto md:ml-32 md:mt-5 "
          src={netFlixLogo}
          alt="Logo"
        />

        {authUser &&
          (aiSearch ? (
            <button
              className="  h-10 rounded-lg px-4 mt-[2.5rem] mr-10  text-white  font-bold bg-blue-600    "
              onClick={() => dispatch(enableAiSearch())}
            >
              Home
            </button>
          ) : (
            <button
              className="  h-10 rounded-lg px-4 mt-[2.5rem] mr-10  text-white  font-bold bg-purple-400   "
              onClick={() => dispatch(enableAiSearch())}
            >
              AI search
            </button>
          ))}

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
