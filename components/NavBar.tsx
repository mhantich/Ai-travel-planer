"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetClose } from "@/components/ui/sheet";

const NavBar = () => {
  const headerRef = useRef(null);
  const [isPov, setIsPov] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsPov(true);
      } else {
        setIsPov(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();

    tl.fromTo(
      headerRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      className={`transition-all duration-500 ease-out transform-gpu  ${
        isPov
          ? "fixed top-0 left-1/2 z-20 w-full -translate-x-1/2"
          : "lg:mx-auto w-full z-20 "
      }`}
    >
      <div className="w-full rounded-none lg:mx-auto z-20 container lg:rounded-3xl px-4 text-black bg-white">
        <nav ref={headerRef} className="py-2 relative">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold">T</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="/" className="hover:text-gray-300 font-semibold">
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

            {/* Mobile View */}
            <div className="md:hidden flex items-center">
              <Button className="bg-white text-gray-900 hover:bg-gray-100 mr-2">
                <Link className="text-black capitalize" href="login">
                  login
                </Link>
              </Button>

              {/* Hamburger Button with Sheet */}
              <Sheet>
                <SheetTrigger asChild>
                  <button className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5">
                    <span className="block w-6 h-0.5 bg-black transform transition duration-300" />
                    <span className="block w-6 h-0.5 bg-black transform transition duration-300" />
                    <span className="block w-6 h-0.5 bg-black transform transition duration-300" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-white">
                  <SheetHeader>
                    <h2 className="text-xl font-bold">Menu</h2>
                  </SheetHeader>
                  <div className="mt-4 flex flex-col space-y-4">
                    <a href="/" className="text-black font-semibold" onClick={() => {}}>
                      Home
                    </a>
                    <a href="#" className="text-black font-semibold" onClick={() => {}}>
                      Products
                    </a>
                    <a href="#" className="text-black font-semibold" onClick={() => {}}>
                      About us
                    </a>
                    <a href="#" className="text-black font-semibold" onClick={() => {}}>
                      Pricing
                    </a>
                    <a href="#" className="text-black font-semibold" onClick={() => {}}>
                      Contact us
                    </a>
                  </div>
                  <SheetClose asChild>
                    <Button className="mt-4 bg-black text-white hover:bg-gray-800 w-full">
                      Close
                    </Button>
                  </SheetClose>
                </SheetContent>
              </Sheet>
            </div>

            {/* Desktop Login Button */}
            <div className="hidden md:block">
              <Button className="bg-white text-gray-900 hover:bg-gray-100">
                <Link className="text-black capitalize" href="login">
                  login
                </Link>
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
