"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Oval } from "react-loader-spinner";
import { toast } from "react-toastify";
import { z } from "zod";

const Register = () => {
  const [loader, setLoader] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const formSchema = z
    .object({
      firstName: z
        .string()
        .trim()
        .min(1, { message: "Required" })
        .min(2, { message: "First name should be minimum 2 characters" })
        .max(50, { message: "First Name can be maximum 50 characters" })
        .refine((value) => value.length > 0 && /^[a-zA-Z ]+$/.test(value), {
          message: "First name can only contain letters",
        }),

      lastName: z.string().trim().min(1, { message: "Required" }).max(50, {
        message: "Last Name can be maximum 50 characters",
      }),
      email: z
        .string()
        .trim()
        .min(1, { message: "Required" })
        .email({ message: "Invalid email address" }),
      orgName: z.string().trim().min(1, { message: "Required" }),
      terms: z.boolean(),
      password: z
        .string()
        .trim()
        .min(1, { message: "Required" })
        .min(8, { message: "Password should be minimum 8 characters" }),
      confirmPassword: z.string().trim().min(1, { message: "Required" }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords don't match",
      path: ["confirmPassword"],
    })
    .superRefine(({ terms }, ctx) => {
      if (terms !== true) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["terms"],
          message: "You have to accept terms and condtions",
        });
      }
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      orgName: "",
      confirmPassword: "",
      terms: false,
    },
  });

  async function createUser(values: z.infer<typeof formSchema>) {
    try {
      setLoader(true);

      const response = await axios.post("/api/register", values);
      setLoader(false);
      toast.success("Registered Successfully");
      router.push("/");
    } catch (e: any) {
      console.log(e);
      toast.error(e.response.data.message);
    } finally {
      setLoader(false);
    }
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center px-6 py-12 mx-auto ">
        <Link
          href="/"
          className="flex items-center mb-6  mt-8 text-2xl font-medium text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Quick Release
        </Link>{" "}
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 mb-4">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create your account
            </h1>{" "}
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(createUser)}
            >
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    First Name
                  </label>{" "}
                  <input
                    type="text"
                    id="first-name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-600 dark:focus:border-blue-600"
                    placeholder="First name"
                    {...register("firstName")}
                  />
                  {errors.firstName && (
                    <p className="text-red-600 text-[11px] pt-1">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="last-name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Last Name
                  </label>{" "}
                  <input
                    type="text"
                    id="first-name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Last name"
                    {...register("lastName")}
                  />
                  {errors.lastName && (
                    <span className="text-red-600 text-[11px] pt-1">
                      {errors.lastName.message}
                    </span>
                  )}
                </div>
              </div>{" "}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>{" "}
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  {...register("email")}
                />
                {errors.email && (
                  <span className="text-red-600 text-[11px] pt-1">
                    {errors.email.message}
                  </span>
                )}
              </div>{" "}
              <div>
                <label
                  htmlFor="company-name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Organization Name
                </label>{" "}
                <input
                  type="text"
                  id="first-name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Company name"
                  {...register("orgName")}
                />
                {errors.orgName && (
                  <span className="text-red-600 text-[11px] pt-1">
                    {errors.orgName.message}
                  </span>
                )}
              </div>{" "}
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>{" "}
                <div className="flex items-center focus-within:border-2 focus-within:border-blue-600 bg-gray-50 border border-gray-300 rounded-lg">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="••••••••"
                    {...register("password")}
                    className=" p-[0.70rem] bg-gray-50  border-gray-300 text-gray-900 sm:text-sm rounded-lg border-none focus-within:border-none focus-within:ring-0 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  />

                  <div
                    className="px-4 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                {errors.password && (
                  <span className="text-red-600 text-[11px] pt-1">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm Password
                </label>{" "}
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="••••••••"
                  {...register("confirmPassword")}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {errors.confirmPassword && (
                  <span className="text-red-600 text-[11px] pt-1">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>{" "}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    {...register("terms")}
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  />
                </div>{" "}
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500 text-blue-600"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>{" "}
              {errors.terms && (
                <span className="text-red-600 text-[11px] pt-1">
                  {errors.terms.message}
                </span>
              )}
              <a href="/quick-release/signup/team" className="mt-4">
                <button
                  type="submit"
                  className="w-full mt-4 text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
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
                    "Create an account"
                  )}
                </button>
              </a>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  href="/"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500 text-blue-600"
                >
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
