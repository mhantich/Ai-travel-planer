"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NavBar = () => {
  const headerRef = useRef(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [isPov, setIsPov] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  // Handle dropdown menu animation
  useEffect(() => {
    if (menuRef.current) {
      if (isOpen) {
        gsap.to(menuRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.3,
          ease: "power3.out",
          display: "flex",
        });
      } else {
        gsap.to(menuRef.current, {
          y: -20,
          opacity: 0,
          duration: 0.3,
          ease: "power3.in",
          onComplete: () => {
            if (menuRef.current) {
              menuRef.current.style.display = "none";
            }
          },
        });
      }
    }
  }, [isOpen]);

  return (
    <div
      className={`transition-all duration-500 ease-out transform-gpu ${
        isPov
          ? "fixed top-[1px] left-1/2 z-20 w-full -translate-x-1/2 scale-100"
          : "mx-auto w-full z-20 scale-95 hover:scale-100"
      }`}
    >
      <div className="w-full rounded-none mx-auto lg:max-w-5xl container lg:rounded-3xl px-4 text-black bg-white">
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

              {/* Hamburger Button */}
              <button
                className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span
                  className={`block w-6 h-0.5 bg-black transform transition duration-300 ${
                    isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-black transition duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-black transform transition duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </button>
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

          {/* Mobile Menu - Moved outside the flex container */}
          <div
            ref={menuRef}
            className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg mt-2 ${
              isOpen ? "flex" : "hidden"
            } flex-col w-full`}
            style={{ opacity: 0 }}
          >
            <a
              href="#"
              className="px-4 py-3 hover:bg-gray-100 font-semibold border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#"
              className="px-4 py-3 hover:bg-gray-100 font-semibold border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Products
            </a>
            <a
              href="#"
              className="px-4 py-3 hover:bg-gray-100 font-semibold border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              About us
            </a>
            <a
              href="#"
              className="px-4 py-3 hover:bg-gray-100 font-semibold border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#"
              className="px-4 py-3 hover:bg-gray-100 font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Contact us
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
