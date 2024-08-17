import { Link, NavLink } from "react-router-dom";
import Section from "../Components/Section";
import { useContext, useState } from "react";
import LoginForm from "../Components/LoginForm";
import SignUpForm from "../Components/SignUpForm";
import ILove from "../assets/love.svg";
import ICart from "../assets/cart.svg";
import { MdExitToApp, MdMenu } from "react-icons/md";
import { MyContext } from "../Context/ContextProvider";
import { FaUser } from "react-icons/fa";
const Navbar = () => {
  const { authenticationStatus, logout } = useContext(MyContext);
  const { user, isAuthenticated, isLoading } = authenticationStatus;
  const [isOpenSignUp, setIsOpenSignUp] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenAvatarMenu, setIsOpenAvatarMenu] = useState(false);
  console.log(authenticationStatus);
  const menuList = (
    <>
      <li>
        <NavLink to={"/"} className="p-1">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="p-1" to={"/shop"}>
          Shop
        </NavLink>
      </li>
      <li>
        <NavLink to={"/about-us"} className="p-1">
          About us
        </NavLink>
      </li>
      <li>
        <NavLink to={"/contact-us"} className="p-1">
          Contact us
        </NavLink>
      </li>
    </>
  );
  return (
    <nav className="h-12 bg-black/90 z-50 px-2 lg:px-0 sticky top-0 left-0">
      <Section className="flex justify-between items-center h-full relative *:flex-1 lg:*:flex-none">
        <div className="text-white h-full flex items-center lg:hidden">
          <button onClick={() => setIsOpenMenu(true)} className="text-2xl">
            <MdMenu />
          </button>
        </div>
        <div className="uppercase flex justify-center lg:justify-start">
          <Link
            to={"/"}
            className="text-white font-semibold text-lg md:text-xl lg:text-2xl"
          >
            ClothMart
          </Link>
        </div>
        <div className="uppercase hidden lg:flex">
          <ul className="text-white flex gap-4 text-sm justify-center items-center menuList">
            {menuList}
          </ul>
        </div>
        <div className="flex gap-5 items-center justify-end lg:justify-normal">
          {isLoading ? (
            <span className="loading loading-ring loading-lg text-white"></span>
          ) : user && isAuthenticated ? (
            <div className="relative">
              <button
                onClick={() => setIsOpenAvatarMenu(!isOpenAvatarMenu)}
                className="bg-gray-100 size-9 rounded-full flex justify-center items-center overflow-hidden"
              >
                <FaUser className="text-black/50 text-2xl" />
              </button>
              <div
                className={`${
                  isOpenAvatarMenu ? "lg:block" : "hidden"
                } w-[200px] hidden bg-gray-100 p-5 absolute right-0 top-12 rounded-md`}
              >
                <ul>
                  <li>
                    <button
                      onClick={() => {
                        setIsOpenAvatarMenu(false);
                        logout();
                      }}
                      className="flex justify-center items-center gap-2 text-white text-sm font-bold bg-red-500 rounded-md py-1 w-full"
                    >
                      Logout <MdExitToApp />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <>
              <div className="h-12 bg-transparent text-xs lg:text-sm text-white flex gap-1 items-center justify-center rounded-lg">
                <button
                  className="active:scale-95 uppercase"
                  onClick={() => {
                    setIsOpenSignUp(false);
                    setIsOpenLogin(!isOpenLogin);
                  }}
                >
                  Login
                </button>{" "}
                /{" "}
                <button
                  className="active:scale-95 uppercase"
                  onClick={() => {
                    setIsOpenLogin(false);
                    setIsOpenSignUp(!isOpenSignUp);
                  }}
                >
                  Sign Up
                </button>
              </div>
              <div className="hidden lg:flex items-center gap-5">
                <button>
                  <img src={ILove} alt="" />
                </button>
                <button>
                  <img src={ICart} alt="" />
                </button>
              </div>
            </>
          )}
        </div>
        <div
          className={`${
            isOpenLogin || isOpenSignUp ? "flex" : "hidden"
          } fixed w-full h-full top-0 right-0  z-40 justify-center items-center bg-black/30 backdrop-blur-[8px]`}
        >
          <div className={`${isOpenLogin ? "flex" : "hidden"}`}>
            <LoginForm
              isOpenLogin={isOpenLogin}
              setIsOpenLogin={setIsOpenLogin}
              setIsOpenSignUp={setIsOpenSignUp}
            />
          </div>
          <div className={`${isOpenSignUp ? "flex" : "hidden"}`}>
            <SignUpForm
              isOpenSignUp={isOpenSignUp}
              setIsOpenSignUp={setIsOpenSignUp}
              setIsOpenLogin={setIsOpenLogin}
            />
          </div>
        </div>
      </Section>
      <div
        className={`fixed top-0 left-0  duration-500 ${
          isOpenMenu ? "translate-x-0" : "-translate-x-full"
        } min-w-[200px] bg-gray-50 h-screen p-5 shadow-xl`}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold">Menu</h3>
          <button
            onClick={() => setIsOpenMenu(false)}
            className="text-sm font-bold text-red-500"
          >
            Close
          </button>
        </div>
        <hr className="my-2 border-black" />
        <div className="">
          <ul className="space-y-3 font-semibold menuList">
            {menuList}
            <li>
              <NavLink to={"/likes"}>Likes</NavLink>
            </li>
            <li>
              <NavLink to={"/cart"}>Cart</NavLink>
            </li>
            {user && isAuthenticated && (
              <li className="pt-10">
                <button
                  onClick={() => logout()}
                  className="flex justify-center items-center gap-2 text-white text-sm font-bold bg-red-500 rounded-md py-1 w-full"
                >
                  Logout <MdExitToApp />
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
