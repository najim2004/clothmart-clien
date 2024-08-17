import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { SlClose } from "react-icons/sl";
import { MyContext } from "../Context/ContextProvider";

const SignUpForm = ({ isOpenSignUp, setIsOpenSignUp, setIsOpenLogin }) => {
  const { signup } = useContext(MyContext);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (!isOpenSignUp) reset();
  }, [isOpenSignUp, reset]);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await signup(data.email, data.password, data.fullName);
      toast.success("Account created successfully!");
      setIsOpenSignUp(false);
    } catch (error) {
      toast.error("Failed to sign up. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[380px] overflow-x-hidden mx-auto p-6 bg-white rounded-sm shadow-md">
      <button
        onClick={() => setIsOpenSignUp(false)}
        className="text-red-500 mb-2 ml-[calc(100%-24px)] text-xl active:scale-95"
      >
        <SlClose />
      </button>
      <h2 className="text-2xl font-bold mb-2">Sign Up</h2>
      <p className="text-gray-500 mb-6">
        Please register with your personal data
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Full name</label>
          <input
            {...register("fullName", { required: "Full name is required" })}
            placeholder="yourname"
            className="w-full p-3 bg-transparent h-12 rounded-sm border focus:outline-none focus:ring-2 focus:ring-black "
          />
          {errors.fullName && (
            <span className="text-red-500">{errors.fullName.message}</span>
          )}
        </div>
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
            className="w-full p-3 bg-transparent h-12 rounded-sm border focus:outline-none focus:ring-2 focus:ring-black "
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
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
              type={passwordVisible ? "text" : "password"}
              placeholder="********"
              className="w-full p-3 bg-transparent h-12 rounded-sm border focus:outline-none focus:ring-2 focus:ring-black "
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
            "Continue"
          )}
        </button>
      </form>
      <p className="mt-6 text-center">
        Already have an account?{" "}
        <button
          onClick={() => {
            setIsOpenLogin(true);
            setIsOpenSignUp(false);
          }}
          className="text-black font-medium active:scale-95"
        >
          Login
        </button>
      </p>
    </div>
  );
};

SignUpForm.propTypes = {
  isOpenSignUp: PropTypes.bool.isRequired,
  setIsOpenSignUp: PropTypes.func.isRequired,
  setIsOpenLogin: PropTypes.func.isRequired,
};

export default SignUpForm;
