import logo from "@/Public/Frame 3.svg";
import Image from "next/image";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleRePasswordVisibility = () => {
    setShowRePassword(!showRePassword);
  };


  return (
    <div className="w-full h-screen">
      <div className="w-full h-full flex bg-[#ffffff] ">
        <div className="w-[50%] h-full flex justify-center items-center">
          <div className="w-[384px] relative flex itr flex-col gap-10">
            <div className="mx-auto">
              <Image src={logo} width={92.34} height={34.31} className="mx-auto" />
            </div>
            <div className="mx-auto w-full h-[64px] gap-2 flex flex-col justify-center">
              <p className="text-center font-[600] text-[24px] leading-[32px] text-[#0f172a]">
                Create Geld account
              </p>
              <p className="font-[400] text-center text-[16px] leading-[24px] text-[#334155]">
                Sign up below to create your Wallet account
              </p>
            </div>
            <Formik
              initialValues={{
                name: "",
                email: "",
                password: "",
                repassword: "",
              }}
              validationSchema={Yup.object().shape({
                name: Yup.string().required("Name is required"),
                email: Yup.string()
                  .email("Invalid email")
                  .required("Email is required"),
                password: Yup.string()
                  .min(7, "Password must be at least 6 characters")
                  .required("Password is required"),
                repassword: Yup.string()
                  .oneOf(
                    [Yup.ref("password"), null],
                    "Your password is different"
                  )
                  .required("Please confirm your password"),
              })}
              onSubmit={async (values, { setSubmitting }) => {
                try {
                  const res = await fetch(API_URL, {
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                    },
                    method: "POST",
                    body: JSON.stringify(values),
                  });
                  const data = await res.json();
                  console.log(data);
                  router.push("/");
                } catch (error) {
                  console.error("Submission error:", error);
                }
                setSubmitting(false);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="w-full flex flex-col gap-4">
                  <Field
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="w-full h-[48px] rounded-lg border-[1px] p-[16px] bg-[#f3f4f6] border-[#d1d5db]"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500"
                  />
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="w-full h-[48px] rounded-lg border-[1px] p-[16px] bg-[#f3f4f6] border-[#d1d5db]"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500"
                  />

                  <div className="relative w-full ">
                    <Field
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="w-full h-[48px] rounded-lg border-[1px] p-[16px] bg-[#f3f4f6] border-[#d1d5db]"
                    />
                    <span
                      onClick={togglePasswordVisibility}
                      className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                    >
                      {showPassword ? <IoMdEyeOff /> : <IoEye />}
                    </span>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500"
                  />

                  <div className="relative">
                    <Field
                      name="repassword"
                      type={showRePassword ? "text" : "password"}
                      placeholder="Re-enter Password"
                      className="w-full h-[48px] rounded-lg border-[1px] p-[16px] bg-[#f3f4f6] border-[#d1d5db]"
                    />
                    <span
                      onClick={toggleRePasswordVisibility}
                      className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                    >
                      {showRePassword ? <IoMdEyeOff /> : <IoEye />}
                    </span>
                  </div>
                  <ErrorMessage
                    name="repassword"
                    component="div"
                    className="text-red-500"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#0166ff] h-[48px] rounded-[20px] p-[15px] text-white"
                  >
                    {isSubmitting ? "Signing Up..." : "Sign Up"}
                  </button>
                </Form>
              )}
            </Formik>

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
        <div className="bg-[#0166ff] w-[50%] h-full"></div>
      </div>
    </div>
  );
}
