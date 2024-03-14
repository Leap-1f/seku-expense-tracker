import { useState } from "react";
import logo from "@/Public/Frame 3.svg";
import Image from "next/image";
import Link from "next/link";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleRePasswordVisibility = () => {
    setShowRePassword(!showRePassword);
  };

  const handleSignUp = () => {
    console.log("Signing up...");
  };
  const Hidden =
    "data:image/png;base64,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";
  const Show =
    "data:image/jpeg;base64,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";
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
                    <Image src={Show} width={40} height={40} />
                  ) : (
                    <Image src={Hidden} width={40} height={40} />
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
                    <Image src={Show} width={40} height={40} />
                  ) : (
                    <Image src={Hidden} width={40} height={40} />
                  )}
                </span>
              </div>
              <button
                className="bg-[#0166ff] h-[48px] rounded-[20px] p-[15px] text-white"
                onClick={handleSignUp}
              >
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
