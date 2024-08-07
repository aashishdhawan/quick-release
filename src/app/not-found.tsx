"use client";
import { Button } from "@/atoms/button";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { usePathname } from "next/navigation";

const NotFound = () => {
  const pathName = usePathname().split("/")[2];
  return (
    <div className="h-1/2 flex items-end justify-center">
      <div className="text-center">

        <h1 className="text-4xl font-bold text-gray-900">404</h1>
        <h3 className="text-2xl font-semibold text-gray-900">Not Found</h3>
        <p className="mt-1 text-sm text-gray-500">{pathName === "changelogs" ? "Changelog has either been deleted or is not yet published." : "This page could not be found."}</p>

        <a href="/">
          <Button
            className="mt-8 border-transparent bg-indigo-600 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" /> <span>Back To Home</span>
          </Button>
        </a>
      </div>
    </div>
  );
};

export default NotFound;