"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const NavBar = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initial animation timeline
    const tl = gsap.timeline();

    // Initial animations without making elements disappear
    tl.fromTo(
      headerRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className=" w-full rounded-none py-2  lg:max-w-5xl z-20  container lg:rounded-3xl px-4 text-black bg-white   fixed top-[1px] left-1/2 transform -translate-x-1/2">
      {/* Rest of your component remains the same */}
      {/* Navigation */}
      <nav ref={headerRef} className="p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">T</div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-gray-300 font-semibold">
              Home
            </a>
            <a href="#" className="hover:text-gray-300 font-semibold">
              Products
            </a>
            <a href="#" className="hover:text-gray-300 font-semibold">
              About us
            </a>
            <a href="#" className="hover:text-gray-300 font-semibold">
              Pricing
            </a>
            <a href="#" className="hover:text-gray-300 font-semibold">
              Contact us
            </a>
          </div>
          <Button className="bg-white text-gray-900 hover:bg-gray-100">
            <Link className="text-black capitalize" href="login">
              login
            </Link>
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
