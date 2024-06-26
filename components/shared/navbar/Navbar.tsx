"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Theme from "./Theme";
import { useTheme } from "@/context/ThemeProvider";
// import Sidebar from "./Sidebar";
import MobileNav from "./MobileNav";
const Navbar = () => {
  const { mode } = useTheme();
  return (
    <nav className="flex-center background-light900_dark200 fixed z-50 w-full">
      <div className=" flex-between gap-5 p-6 dark:shadow-none max-xl:w-full sm:px-12 xl:min-w-[1200px] ">
        <Link href="/" className="flex items-center gap-1">
          {mode === "light" ? (
            <Image
              src="/assets/images/primary-logo.svg"
              width={150}
              height={40}
              alt="logo"
            />
          ) : (
            <Image
              src="/assets/images/primary-logo-dark.svg"
              width={150}
              height={40}
              alt="logo"
            />
          )}
        </Link>
        <div className="text-dark100_light900 flex gap-5 max-md:hidden">
          <Link href="/projects">Home</Link>
          <Link href="/blog">About Us</Link>
          <Link href="/projects">Careers</Link>
          <Link href="/why-join-us">Why Join Us</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/blog">Blog</Link>
        </div>
        <Link href="/contact">
          <div className="rounded-md bg-primary-500 px-5 py-2 text-white">
            Contact
          </div>
        </Link>

        <div className="flex-between">
          <Theme />
          {/* <Sidebar /> */}
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
