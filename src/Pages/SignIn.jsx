import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Foodpen from "../assets/Foodpen.png";
import gradientBg from "../assets/greengrradientbg.png";
import gradientBgsm from "../assets/greengradientsm.png";
import fruitmansm from "../assets/fruitmansm.png";
import fruitmanlg from "../assets/fruitmanlg.png";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* LEFT SECTION */}
        <div className="hidden lg:flex relative w-[600px] h-[650px] items-end justify-center overflow-hidden">
          {/* Background gradient */}
          <img
            src={gradientBg}
            alt="background gradient"
            className="absolute inset-0 w-full h-[700px] object-cover"
          />

          {/* Fruit man image */}
          <img
            src={fruitmanlg}
            alt="man with fruit"
            className="absolute inset-0 w-full h-[700px] object-cover mix-blend-multiply"
          />

          {/* Gradient overlay */}
          <div
            className="absolute inset-0 mt-[450px] h-[490px]"
            style={{
              background:
                "linear-gradient(to bottom, rgba(14,63,51,0) 0%, rgba(14,63,51,0.4) 40%, rgba(14,63,51,0.7) 100%)",
            }}
          />

          {/* Text overlay */}
          <div className="relative z-10 text-center mb-10 text-white px-6">
            <h1 className="text-[40px] font-semibold leading-snug">
              Your one stop <br /> for everything fresh
            </h1>
          </div>
        </div>
        {/* LEFT SECTION */}

        {/* RIGHT SECTION */}
        <div className="flex flex-col mt-[150px] items-center flex-1 px-6">
          {/* Logo */}
          <div className="flex flex-row items-center justify-center mb-6">
            <img src={Foodpen} alt="Foodpen logo" />
            <div className="ml-1 font-medium text-[20px] font-poppins">
              FoodPen
            </div>
          </div>

          {/* Texts */}
          <div className="text-[24px] font-medium font-dmsans text-center mb-2">
            Sign in to your Account
          </div>
          <div className="text-[16px] font-semibold font-nunito text-center mb-6">
            Don’t have an account?{" "}
            <span className="text-[#3aa736] cursor-pointer">Sign Up</span>
          </div>

          {/* FORM */}
          <form className="w-full max-w-sm space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#3aa736]"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 pr-10 focus:outline-none focus:ring-1 focus:ring-[#3aa736]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-[#3aa736] transition"
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="w-full mt-6 py-2 rounded-lg font-semibold text-white bg-[#3aa736] hover:bg-[#33932f] transition duration-200"
            >
              Proceed
            </button>
          </form>
        </div>

        {/* Image for small & medium screens */}
        <div className="block lg:hidden mt-[50px] flex-col relative w-full h-[300px] sm:h-[400px] md:h-[500px] items-end justify-center overflow-hidden">
          <img
            src={gradientBgsm}
            alt="background gradient"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <img
            src={fruitmansm}
            alt="man cooking"
            className="absolute inset-0 w-full h-full object-cover mix-blend-multiply"
          />

          {/* Smooth gradient overlay */}
          <div
            className="absolute inset-0 mt-[150px] sm:mt-[200px] md:mt-[250px] h-[300px]"
            style={{
              background:
                "linear-gradient(to bottom, rgba(14,63,51,0) 0%, rgba(14,63,51,0.4) 40%, rgba(14,63,51,0.7) 100%)",
            }}
          />

          <div className="relative z-10 text-center mb-10 text-white px-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl pt-[150px] sm:pt-[250px] md:pt-[300px] font-semibold leading-snug">
              Eco-friendly delivery <br /> to your doorstep
            </h1>
          </div>
        </div>
        {/* Image for small & medium screens */}
      </div>
    </>
  );
}
