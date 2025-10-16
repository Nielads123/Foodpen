import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Foodpen from "../assets/Foodpen.png";
import gradientBg from "../assets/greengrradientbg.png";
import gradientBgsm from "../assets/greengradientsm.png"
import manimagesm from "../assets/mansm.png"
import manImage from "../assets/manlg.png";

export default function SignUp() {
  // State
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [validations, setValidations] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false,
  });

  // Password validation logic
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    setValidations({
      length: value.length >= 8,
      uppercase: /[A-Z]/.test(value),
      lowercase: /[a-z]/.test(value),
      number: /\d/.test(value),
      special: /[@$!%*?&.]/.test(value),
    });
  };

  // All conditions valid?
  const isPasswordValid = Object.values(validations).every(Boolean);
  const isMatch = password === confirmPassword && password.length > 0;
  const canSubmit = isPasswordValid && isMatch;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (canSubmit) {
      alert("✅ Account created successfully!");
    }
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row min-h-screen">
    {/* LEFT SECTION */}
<div className="hidden lg:flex relative w-[600px] h-[900px] items-end justify-center overflow-hidden">
  <img
    src={gradientBg}
    alt="background gradient"
    className="absolute inset-0 w-full h-full object-cover"
  />
  <img
    src={manImage}
    alt="man cooking"
    className="absolute inset-0 w-full h-full object-cover mix-blend-multiply"
  />

  {/* Gradient overlay for smooth blend */}
  <div
    className="absolute inset-0 mt-[450px] h-[490px]"
    style={{
      background: "linear-gradient(to bottom, rgba(14,63,51,0) 0%, rgba(14,63,51,0.4) 40%, rgba(14,63,51,0.7) 100%)",
    }}
  />

  <div className="relative z-10 text-center mb-10 text-white px-6">
    <h1 className="text-[40px] font-semibold leading-snug">
      Eco-friendly delivery <br /> to your doorstep
    </h1>
  </div>
</div>
{/* LEFT SECTION */}

        

        {/* RIGHT SECTION */}
        <div className="flex flex-col mt-[50px] items-center flex-1 px-6">
          {/* Logo */}
          <div className="flex flex-row items-center justify-center mb-6">
            <img src={Foodpen} alt="Foodpen logo" />
            <div className="ml-1 font-medium text-[20px] font-poppins">FoodPen</div>
          </div>

          {/* Texts */}
          <div className="text-[24px] font-medium font-dmsans text-center mb-2">
            Create a personal account
          </div>
          <div className="text-[16px] font-semibold font-nunito text-center mb-6">
            Already have an account?{" "}
            <span className="text-[#3aa736] cursor-pointer">Sign in</span>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
            {/* First & Last Name */}
            <div className="flex flex-row space-x-3">
              <div className="block w-1/2">
                <label className="block text-sm font-medium mb-1">First Name</label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#3aa736]"
                  required
                />
              </div>
              <div className="block w-1/2">
                <label className="block text-sm font-medium mb-1">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#3aa736]"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#3aa736]"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your mobile number"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#3aa736]"
                required
              />
            </div>

            {/* State */}
            <div>
              <label className="block text-sm font-medium mb-1">Where do you reside?</label>
              <select
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#3aa736]"
              >
                <option value="">Select your state</option>
                {[
                  "Abia",
                  "Adamawa",
                  "Akwa Ibom",
                  "Anambra",
                  "Bauchi",
                  "Bayelsa",
                  "Benue",
                  "Borno",
                  "Cross River",
                  "Delta",
                  "Ebonyi",
                  "Edo",
                  "Ekiti",
                  "Enugu",
                  "Gombe",
                  "Imo",
                  "Jigawa",
                  "Kaduna",
                  "Kano",
                  "Katsina",
                  "Kebbi",
                  "Kogi",
                  "Kwara",
                  "Lagos",
                  "Nasarawa",
                  "Niger",
                  "Ogun",
                  "Ondo",
                  "Osun",
                  "Oyo",
                  "Plateau",
                  "Rivers",
                  "Sokoto",
                  "Taraba",
                  "Yobe",
                  "Zamfara",
                  "FCT - Abuja",
                ].map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            {/* Usage Type */}
            <div>
              <label className="block text-sm font-medium mb-1">
                How would you be using Foodpen?
              </label>
              <select
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#3aa736]"
                defaultValue=""
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="personal">For personal use (ordering food)</option>
                <option value="vendor">As a vendor (selling food)</option>
                <option value="rider">As a delivery rider</option>
                <option value="business">For a business or restaurant</option>
              </select>
            </div>

            {/* PASSWORD FIELD */}
            <div className="relative">
              <label className="block text-sm font-medium mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  className={`w-full border rounded-lg px-3 py-2 pr-10 focus:outline-none ${
                    isPasswordValid
                      ? "border-green-500 focus:ring-green-500"
                      : "border-gray-300 focus:ring-[#3aa736]"
                  }`}
                  required
                />

                {/* Eye toggle */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-[#3aa736]"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              {/* Password validations */}
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
                {[
                  { label: "8 characters", valid: validations.length },
                  { label: "Uppercase", valid: validations.uppercase },
                  { label: "Lowercase", valid: validations.lowercase },
                  { label: "Number", valid: validations.number },
                  { label: "Special character", valid: validations.special },
                ].map(({ label, valid }) => (
                  <div
                    key={label}
                    className={`flex items-center justify-center border rounded-2xl px-2 py-1 h-[30px] ${
                      valid
                        ? "bg-green-50 border-green-400 text-green-700"
                        : "bg-gray-100 border-gray-300 text-gray-500"
                    }`}
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>

            {/* CONFIRM PASSWORD FIELD */}
            <div className="relative mt-4">
              <label className="block text-sm font-medium mb-1">Confirm Password</label>
              <input 
                type={showPassword ? "text" : "password"}
                placeholder="Re-enter your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`w-full border rounded-lg  px-3 py-2 focus:outline-none ${
                  password && confirmPassword && password !== confirmPassword
                    ? "border-red-500 focus:ring-red-500"
                    : password && confirmPassword && password === confirmPassword
                    ? "border-green-500 focus:ring-green-500"
                    : "border-gray-300 focus:ring-[#3aa736]"
                }`}
                required
              />
              {password && confirmPassword && password !== confirmPassword && (
                <p className="text-sm text-red-500 mt-1">Passwords do not match</p>
              )}
            </div>

            {/* SUBMIT BUTTON */}
           <button
  type="submit"
  disabled={!canSubmit}
  className={`w-full mt-6 py-2 rounded-lg font-semibold text-white transition ${
    canSubmit
      ? "bg-[#3aa736] hover:bg-[#33932f]"
      : "bg-[#3aa736]/70 cursor-not-allowed"
  }`}
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
    src={manimagesm}
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