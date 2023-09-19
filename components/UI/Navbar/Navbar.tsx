import Link from "next/link";
import { useRouter } from "next/router";
import logo from "../../../src/assets/socialink-color.svg";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  return (
    <div>
      <nav className="bg-white  sticky w-full z-20 top-0 left-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/">
            <Image src={logo} alt="" width={150} />
          </Link>

          <div className="flex md:order-2">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
            >
              Get started
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white  ">
              <li>
                <Link
                  href="/"
                  className={`block py-2 pl-3 pr-4 md:p-0 text-gray-900 ${
                    router.pathname === "/"
                      ? "bg-blue-700 rounded md:bg-transparent md:text-blue-700 "
                      : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/media"
                  className={`block py-2 pl-3 pr-4 md:p-0 text-gray-900 ${
                    router.pathname === "/media"
                      ? "bg-blue-700 rounded md:bg-transparent md:text-blue-700 "
                      : ""
                  }`}
                >
                  Media
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`block py-2 pl-3 pr-4 md:p-0 text-gray-900 ${
                    router.pathname === "/about"
                      ? "bg-blue-700 rounded md:bg-transparent md:text-blue-700"
                      : ""
                  }`}
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
