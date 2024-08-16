import { NavLink } from "react-router-dom";
import Section from "../Components/Section";
import { useState } from "react";
import LoginForm from "../Components/LoginForm";
import SignUpForm from "../Components/SignUpForm";
import ILove from "../assets/love.svg";
import ICart from "../assets/cart.svg";
import { MdMenu } from "react-icons/md";
const Navbar = () => {
  const [isOpenSignUp, setIsOpenSignUp] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);

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
    <nav className="h-12 bg-black/90 z-50">
      <Section className="flex justify-between items-center h-full relative">
        <div className="text-white h-full flex items-center lg:hidden">
          <button className="text-2xl">
            <MdMenu />
          </button>
        </div>
        <div className="uppercase">
          <h2 className="text-white font-semibold text-2xl">ClothMart</h2>
        </div>
        <div className="uppercase hidden lg:flex">
          <ul className="text-white flex gap-4 text-sm justify-center items-center menuList">
            {menuList}
          </ul>
        </div>
        <div className="flex gap-5 items-center">
          <div className="h-12 px-6 bg-transparent text-sm text-white flex gap-1 items-center justify-center rounded-lg">
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
          <div className="flex items-center gap-5">
            <button className="hidden lg:flex">
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
    </nav>
  );
};

export default Navbar;
