"use client";

import { Input } from "@/atoms/input";
import { WEB_DETAILS } from "@/Utils/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Oval } from "react-loader-spinner";
import { toast } from "react-toastify";
import { z } from "zod";

const ResendRegisterLink = () => {
  const [loader, setLoader] = useState(false);
  const formSchema = z.object({
    email: z
      .string()
      .trim()
      .min(1, { message: "Required" })
      .email({ message: "Invalid email address" })
      .transform((value) => value.toLowerCase()),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const resendEmail = async (values: z.infer<typeof formSchema>, e: any) => {
    toast.dismiss();
    e.preventDefault();
    setLoader(true);
    try {
      await axios.post("/api/resend-verification-link", values);
      toast.success("Reset Link Sent Successfully");
      setLoader(false);
    } catch (e: any) {
      toast.error("Email not registered");
      setLoader(false);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <Link
        href="/"
        className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <Image
          className="w-8 h-8 mr-2"
          src={WEB_DETAILS.favicon}
          alt="logo"
          width={32}
          height={32}
        />
        {WEB_DETAILS.name}
      </Link>{" "}
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            {"Resend Verification Email"}
          </h1>{" "}
          <form
            className="space-y-4 md:space-y-6"
            onSubmit={handleSubmit(resendEmail)}
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                {"Your email"}
              </label>{" "}
              <Input
                type="email"
                {...register("email")}
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
              />
              {errors.email && (
                <span className="text-red-600 text-[12px]">
                  {errors.email.message}
                </span>
              )}
            </div>{" "}
            <button
              type="submit"
              disabled={loader}
              className={
                `w-full mt-4  text-white ${loader ? "bg-blue-400" : "bg-blue-600"} focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`
              }>
              {loader ? (
                <div className="flex items-center justify-center gap-4">
                  <Oval
                    height={25}
                    width={25}
                    color="black"
                    secondaryColor="white"
                  />
                </div>
              ) : (
                "Request Password"
              )}{" "}
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              {"Login to your account "}
              <Link
                href="/"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                {"Log In"}
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResendRegisterLink;
