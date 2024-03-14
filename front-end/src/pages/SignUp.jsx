import logo from "@/Public/Frame 3.svg";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleRePasswordVisibility = () => {
    setShowRePassword(!showRePassword);
  };



  return (
    <div className="w-full h-screen">
      <div className="w-full h-full flex bg-[#ffffff]">
        <div className="w-[50%] h-full flex justify-center items-center">
          <div className="w-[384px] relative flex flex-col gap-10">
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
                type="text"
                placeholder="Name"
                className="w-full h-[48px] rounded-lg border-[1px] p-[16px] bg-[#f3f4f6] border-[#d1d5db]"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full  h-[48px] rounded-lg border-[1px] p-[16px] bg-[#f3f4f6] border-[#d1d5db] "
              />
              <div className="relative">
                <input
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
                  type={showRePassword ? "text" : "password"}
                  placeholder="Re-enter Password"
                  className="w-full  h-[48px] rounded-lg border-[1px] p-[16px] bg-[#f3f4f6] border-[#d1d5db] "
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
              <button className="bg-[#0166ff] h-[48px] rounded-[20px] p-[15px] text-white">
                Sign Up
              </button>
              <div className="flex justify-center">
                <p className="font-[400] text-[16px] leading-[24px] text-[#0f172a]">
                  Already have an account?
                </p>
                <Link href={"http://localhost:3000"}>
                  <div className="p-sm w-[77px] h-[32px] gap-1 text-center text-[#0166ff]">
                    Sign In
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
