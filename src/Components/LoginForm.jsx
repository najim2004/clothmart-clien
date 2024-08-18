import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { SlClose } from "react-icons/sl";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { MyContext } from "../Context/ContextProvider";

const LoginForm = ({ isOpenLogin, setIsOpenLogin, setIsOpenSignUp }) => {
  const { login, loginWithGoogle } = useContext(MyContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isOpenLogin) reset();
  }, [isOpenLogin, reset]);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const userCredential = await login(data.email, data.password);

      if (userCredential?.user?.email) {
        toast.success("Logged in successfully!");
        setIsOpenLogin(false);
      }
      if (userCredential.code === "auth/invalid-credential") {
        toast.error("Invalid password or email");
      }
    } catch (error) {
      toast.error("Failed to log in. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);

    try {
      const userCredential = await loginWithGoogle();
      if (userCredential?.user?.email) {
        toast.success("Logged in with Google successfully!");
        setIsOpenLogin(false);
      }
      if (userCredential.code === "auth/popup-closed-by-user")
        toast.error("Failed to log in. Please try again");
    } catch (error) {
      toast.error("Failed to log in with Google. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[380px] overflow-x-hidden mx-auto p-6 bg-white rounded-sm shadow-md">
      <button
        onClick={() => setIsOpenLogin(false)}
        className="text-red-500 mb-2 ml-[calc(100%-24px)] text-xl active:scale-95"
      >
        <SlClose />
      </button>
      <h2 className="text-2xl font-bold mb-2">Login</h2>
      <p className="text-gray-500 mb-6">Please login with your personal data</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email format",
              },
            })}
            placeholder="yourname@gmail.com"
            className="w-full p-3 bg-transparent h-12 rounded-sm border focus:outline-none focus:ring-2 focus:ring-black"
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Password</label>
          <div className="relative">
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              type={passwordVisible ? "text" : "password"}
              placeholder="********"
              className="w-full p-3 bg-transparent h-12 rounded-sm border focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform translate-y-[-50%] text-gray-600"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>
        <button
          disabled={loading}
          type="submit"
          className={`w-full bg-black text-white p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-transparent mb-4 flex items-center justify-center ${
            loading ? "cursor-not-allowed" : "active:scale-95"
          }`}
        >
          {loading ? (
            <span className="loading loading-dots loading-sm"></span>
          ) : (
            "Login"
          )}
        </button>
        <div className="flex items-center justify-center">
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-sm flex items-center space-x-2 focus:outline-none active:scale-95 hover:bg-gray-100"
          >
            <FcGoogle />
            <span>Login with Google</span>
          </button>
        </div>
      </form>
      <p className="mt-6 text-center">
        Don&#39;t have an account?{" "}
        <button
          onClick={() => {
            setIsOpenSignUp(true);
            setIsOpenLogin(false);
          }}
          className="text-black font-medium hover:underline active:scale-95"
        >
          Sign Up
        </button>
      </p>
    </div>
  );
};

LoginForm.propTypes = {
  isOpenLogin: PropTypes.bool.isRequired,
  setIsOpenLogin: PropTypes.func.isRequired,
  setIsOpenSignUp: PropTypes.func.isRequired,
};

export default LoginForm;
