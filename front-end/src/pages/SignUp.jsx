import { useState } from "react";
import logo from "@/Public/Frame 3.svg";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleSignUp = async () => {
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, rePassword }),
      });
      if (response.ok) {
        console.log("Sign up successful!");
      } else {
        console.error("Sign up failed:", response.statusText);
      }
    } catch (error) {
      console.error("Sign up failed:", error);
    }
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
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-[48px] rounded-lg border-[1px] p-[16px] bg-[#f3f4f6] border-[#d1d5db]"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full  h-[48px] rounded-lg border-[1px] p-[16px] bg-[#f3f4f6] border-[#d1d5db] "
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full  h-[48px] rounded-lg border-[1px] p-[16px] bg-[#f3f4f6] border-[#d1d5db] "
              />
              <input
                type="password"
                placeholder="Re-enter Password"
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
                className="w-full  h-[48px] rounded-lg border-[1px] p-[16px] bg-[#f3f4f6] border-[#d1d5db] "
              />
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
