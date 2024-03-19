import logo from "@/Public/Frame 3.svg";
import Image from "next/image";
import Link from "next/link";

import * as Yup from "yup";

import { useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { useRouter } from "next/router";

export default function SignUp() {
  const API_URL = "http://localhost:8080";

  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
  });

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(7, "Password must be at least 6 characters")
      .required("Password is required"),
    repassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Please confirm your password"),
  });
  console.log(validationSchema);
  const handleSubmit = async () => {
    try {
      await validationSchema.validate(userData, { abortEarly: false });

      const res = await fetch(API_URL, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(userData),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error.errors);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleRePasswordVisibility = () => {
    setShowRePassword(!showRePassword);
  };

  const handleOnChangeInput = (event) => {
    const { value, name } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <div className="w-full h-screen">
      <div className="w-full h-full flex bg-[#ffffff] ">
        <div className="w-[50%] h-full flex justify-center items-center">
          <div className="w-[384px] relative flex itr flex-col gap-10">
            <div className="mx-auto">
              <Image
                src={logo}
                width={92.34}
                height={34.31}
                className="mx-auto"
              />
            </div>
            <div className="mx-auto w-full h-[64px] gap-2 flex flex-col justify-center">
              <p className="text-center font-[600] text-[24px] leading-[32px] text-[#0f172a]">
                Create Geld account
              </p>
              <p className="font-[400] text-center text-[16px] leading-[24px] text-[#334155]">
                Sign up below to create your Wallet account
              </p>
            </div>
            <div className="w-full h-[176px] gap-4 flex flex-col">
              <input
                onChange={handleOnChangeInput}
                name="name"
                type="text"
                placeholder="Name"
                className="w-full h-[48px] rounded-lg border-[1px] p-[16px] bg-[#f3f4f6] border-[#d1d5db]"
              />
              <input
                name="email"
                onChange={handleOnChangeInput}
                type="email"
                placeholder="Email"
                className="w-full  h-[48px] rounded-lg border-[1px] p-[16px] bg-[#f3f4f6] border-[#d1d5db] "
              />
              <div className="relative">
                <input
                  name="password"
                  onChange={handleOnChangeInput}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full  h-[48px] rounded-lg border-[1px] p-[16px] bg-[#f3f4f6] border-[#d1d5db] "
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                >
                  {showPassword ? (
                    <IoEye width={40} height={40} />
                  ) : (
                    <IoMdEyeOff width={40} height={40} />
                  )}
                </span>
              </div>
              <div className="relative">
                <input
                  name="repassword"
                  onChange={handleOnChangeInput}
                  type={showRePassword ? "text" : "password"}
                  placeholder="Re-enter Password"
                  className="w-full  h-[48px] rounded-lg border-[1px] p-[16px] bg-[#f3f4f6] border-[#d1d5db]  ${
                    validationSchema.fields.name && validationSchema.fields.name.errors.length > 0
                      ? 'border-red-500' // Add red border if there's an error
                      : ''
                  }`"
                />
                <span
                  onClick={toggleRePasswordVisibility}
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                >
                  {showRePassword ? (
                    <IoEye width={40} height={40} />
                  ) : (
                    <IoMdEyeOff width={40} height={40} />
                  )}
                </span>
              </div>
              <button
                onClick={handleSubmit}
                className="bg-[#0166ff] h-[48px] rounded-[20px] p-[15px] text-white"
              >
                Sign Up
              </button>
              <div className="flex justify-center">
                <p className="font-[400] text-[16px] leading-[24px] text-[#0f172a]">
                  Already have an account?
                </p>
                <Link href={"/"}>
                  <div className="p-sm w-[77px] text-center h-[32px] gap-1  text-[#0166ff]">
                    <p className="text-center w-full h-full flex justify-center items-center">
                      Sign In
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#0166ff] w-[50%] h-full"></div>
      </div>
    </div>
  );
}
