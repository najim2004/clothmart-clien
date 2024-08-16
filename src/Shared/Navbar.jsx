import { NavLink } from "react-router-dom";
import Section from "../Components/Section";
import { useState } from "react";
import LoginForm from "../Components/LoginForm";
import SignUpForm from "../Components/SignUpForm";
import ILove from "../assets/love.svg";
import ICart from "../assets/cart.svg";
import { MdExitToApp, MdMenu } from "react-icons/md";
const Navbar = () => {
  const [isOpenSignUp, setIsOpenSignUp] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

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
    <nav className="h-12 bg-black/90 z-50 px-2 lg:px-0">
      <Section className="flex justify-between items-center h-full relative *:flex-1 lg:*:flex-none">
        <div className="text-white h-full flex items-center lg:hidden">
          <button onClick={() => setIsOpenMenu(true)} className="text-2xl">
            <MdMenu />
          </button>
        </div>
        <div className="uppercase">
          <h2 className="text-white font-semibold text-lg md:text-xl lg:text-2xl">
            ClothMart
          </h2>
        </div>
        <div className="uppercase hidden lg:flex">
          <ul className="text-white flex gap-4 text-sm justify-center items-center menuList">
            {menuList}
          </ul>
        </div>
        <div className="flex gap-5 items-center justify-end lg:justify-normal">
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
        </div>
        <div className={`absolute top-12 right-0 z-40`}>
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
          <ul className="space-y-3 font-semibold">
            {menuList}
            <li className="pt-10">
              <button className="flex justify-center items-center gap-2 text-white text-sm font-bold bg-red-500 rounded-md py-1 w-full">
                Logout <MdExitToApp />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
