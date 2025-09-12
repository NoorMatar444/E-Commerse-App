"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { CartContext } from "./../../CartContextProvider/CartContextProvider";

export default function Navbar() {
  const path = usePathname();
  const { data: session, status } = useSession();
  const { countNumber, setcountNumber } = useContext(CartContext);
  function Logout() {
    signOut({ callbackUrl: "/Login" });
  }
  return (
    <nav className="bg-green-700 w-full text-white">
      <div className="container w-full lg:w-[80%]  p-2 mx-auto flex flex-col gap-5 lg:flex-row justify-between ">
        <div className="first">
          <ul className="flex lg:gap-4 gap-8">
            <li>
              <Link className={path === "/" ? "active" : ""} href="/">
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
              FreshCart
            </li>
            <li>
              <Link className={path === "/" ? "active" : ""} href="/">
                Home
              </Link>
            </li>
            {session && (
              <li>
                <Link className="relative" href="/Cart">
                  Cart
                  {countNumber > 0 && (
                    <span className="absolute top-[-10px] end-[-10px] flex size-5 bg-white rounded-full justify-center items-center text-emerald-600">
                      {countNumber}
                    </span>
                  )}
                </Link>
              </li>
            )}

            <li>
              <Link
                className={path === "/Products" ? "active" : ""}
                href="/Products"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                className={path === "/Categories" ? "active" : ""}
                href="/Categories"
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                className={path === "/Brands" ? "active" : ""}
                href="/Brands"
              >
                Brands
              </Link>
            </li>
            {session && (
              <li>
                <Link
                  className={path === "/Address" ? "active" : ""}
                  href="/Address"
                >
                  Address
                </Link>
              </li>
            )}

            <li>
              <Link
                className={path === "/WishList" ? "active" : ""}
                href="/WishList"
              >
                <i className="fa-solid fa-clipboard-list"></i>
              </Link>
            </li>
          </ul>
        </div>
        <div className="last">
          <ul className="flex lg:gap-4 gap-8">
            <li>
              <Link href="">
                <i className="fa-brands fa-instagram"></i>
              </Link>
            </li>
            <li>
              <Link href="">
                <i className="fa-brands fa-facebook"></i>
              </Link>
            </li>
            <li>
              <Link href="">
                <i className="fa-brands fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link href="">
                <i className="fa-brands fa-linkedin"></i>
              </Link>
            </li>
            <li>
              <Link href="">
                <i className="fa-brands fa-youtube"></i>
              </Link>
            </li>
            {!session ? (
              <>
                <li>
                  <Link
                    className={path === "/Register" ? "active" : ""}
                    href="/Register"
                  >
                    Register
                  </Link>
                </li>
                <li>
                  <Link
                    className={path === "/Login" ? "active" : ""}
                    href="/Login"
                  >
                    Login
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <span className="cursor-pointer" onClick={Logout}>
                  Logout
                </span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
