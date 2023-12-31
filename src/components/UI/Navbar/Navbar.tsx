/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "../../../assets/socialink-color.svg";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "../Button";
import { useAppSelector } from "@/hooks/reduxHook";
import Account from "./Account";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [previousScroll, setPreviousScroll] = useState(0);
  const { data: session } = useSession();
  console.log(session);

  const handleScroll = () => {
    const currentScroll = window.scrollY;

    if (currentScroll > previousScroll) {
      setIsNavbarVisible(false);
    } else {
      setIsNavbarVisible(true);
    }

    setPreviousScroll(currentScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, previousScroll]);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  const navbarClasses = `fixed top-0 z-20 border-b w-full border-gray-200 transition-transform duration-300 ${
    isNavbarVisible ? "translate-y-0" : "-translate-y-full"
  } bg-white shadow-md`;

  return (
    <div>
      <nav className={navbarClasses}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/">
            <Image src={logo} alt="" width={150} />
          </Link>

          <div className="flex md:order-2">
            {isLoggedIn || session?.user?.email ? (
              <>
                <ul className=" items-center hidden lg:flex">{<Account />}</ul>
              </>
            ) : (
              <Link href={"/signup"}>
                <Button
                  title="Get started"
                  className="border border-black text-primary hover:bg-primary hover:border-primary hover:text-white duration-300 px-3 py-2 hidden md:block"
                  icon=""
                />
              </Link>
            )}
            <button
              onClick={toggleMenu}
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
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
            {isMenuOpen && (
              <div
                className={`absolute  lg:hidden left-0 w-full bg-gray-300 mt-2 top-16 overflow-y-auto ${
                  isMenuOpen
                    ? "dropdown-menu-small"
                    : "-translate-x-full duration-300"
                } `}
              >
                <div className=" shadow-sm text-brand hover:text-primary">
                  <nav className="flex justify-center mx-5">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                      <li>
                        <Link
                          href="/"
                          className={`block py-2 text-center md:p-0 text-gray-900 ${
                            router.pathname === "/"
                              ? "bg-blue-700 rounded md:bg-transparent text-gray-50 "
                              : ""
                          }`}
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/media"
                          className={`block py-2 text-center md:p-0 text-gray-900 ${
                            router.pathname === "/media"
                              ? "bg-blue-700 rounded md:bg-transparent text-gray-50 "
                              : ""
                          }`}
                        >
                          Media
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/about"
                          className={`block py-2 text-center md:p-0 text-gray-900 ${
                            router.pathname === "/about"
                              ? "bg-blue-700 rounded md:bg-transparent text-gray-50"
                              : ""
                          }`}
                        >
                          About
                        </Link>
                      </li>
                      <li className="mt-2">
                        {isLoggedIn || session?.user?.email ? (
                          <>
                            <ul>{<Account />}</ul>
                          </>
                        ) : (
                          <Link href={"/signup"}>
                            <Button
                              title="Get started"
                              className="border border-black text-primary hover:bg-primary hover:border-primary hover:text-white duration-300 px-3  py-2 "
                              icon=""
                            />
                          </Link>
                        )}
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
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
