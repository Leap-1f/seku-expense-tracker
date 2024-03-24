import logo from "@/Public/Frame 3.svg";
import Image from "next/image";
import Link from "next/link";

import * as Yup from "yup";

import { useRouter } from "next/router";
import { useFormik, FormikProvider } from "formik";
import { useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";


export default function Home() {

  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const formikSignIn = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string()
        .min(7, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit:async(values)=>{
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/users`, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "GET",
          body: JSON.stringify(values),
        });
        const data = await res.json();

        if (data.success) {
          router.push("/Dashboard");
        
        } else console.log("failed login ");
      } catch (error) {
        console.error("cant fetch , error login:", error);
      }
    }
  });

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
            <div className="mx-auto w-[287px] h-[64px] gap-2 flex flex-col justify-center">
              <p className="text-center font-[600] text-[24px] leading-[32px] text-[#0f172a]">
                Welcome Back
              </p>
              <p className="font-[400] text-[16px] leading-[24px] text-[#334155]">
                Welcome back, Please enter your details
              </p>
            </div>
            <div className="w-full h-[176px] gap-4 flex flex-col">
              <FormikProvider
                value={formikSignIn}
              >
                <form className="w-full flex flex-col gap-4"
                   onSubmit={formikSignIn.handleSubmit}>
                  <input
                     value={formikSignIn.values.email}
                     onChange={formikSignIn.handleChange}
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="w-full h-[48px] rounded-lg border-[1px] p-[16px] bg-[#f3f4f6] border-[#d1d5db]"
                  />
                       {formikSignIn.errors.email && formikSignIn.touched.email ? (
                  <div className="text-red-500 text-sm">
                    {formikSignIn.errors.email}
                  </div>
                ) : null}
             

                  <div className="relative">
                    <input
                      value={formikSignIn.values.password}
                      onChange={formikSignIn.handleChange}
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="w-full  h-[48px] rounded-lg border-[1px] p-[16px] bg-[#f3f4f6] border-[#d1d5db] "
                    />
                      {formikSignIn.errors.password && formikSignIn.touched.password ? (
                  <div className="text-red-500 text-sm">
                    {formikSignIn.errors.password}
                  </div>
                ) : null}
             
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
                  <button type="submit" className="bg-[#0166ff] h-[48px] rounded-[20px] p-[15px] text-white">
                    Login
                  </button>
                </form>
              </FormikProvider>
              <div className="flex justify-center">
                <p className="font-[400] text-[16px] text-center leading-[24px] text-[#0f172a]">
                  Don't have an account?
                </p>
                <Link href="SignUp">
                  <div className="flex justify-center  items-center p-sm w-[77px] h-[32px] gap-1 text-center text-[#0166ff]">
                    Sign up
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
