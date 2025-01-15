"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const partnersRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initial animation timeline
    const tl = gsap.timeline();

    // Initial animations without making elements disappear
    tl.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.5"
    )
      .fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.7"
      )
      .fromTo(
        emailRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        phoneRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        partnersRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.3"
      );

    // Scroll animation for phone that won't make it disappear
    ScrollTrigger.create({
      trigger: phoneRef.current,
      start: "top center",
      end: "bottom center",
      scrub: 1,
      animation: gsap.to(phoneRef.current, {
        rotate: 5,
        y: -20,
      }),
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      className="flex items-end relative  px-8 "
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/originals/a0/ea/4c/a0ea4ce1b166c0a6a7cac0d785e35868.gif)",
        backgroundSize: "cover",
      }}
    >
      {/* Hero Section */}
      <div className="bg-black/40 absolute top-0  right-0 bottom-0 left-0 w-full h-full "></div>
      <main className=" relative flex flex-col  justify-end text-white   h-[450px] container mx-auto  ">
        <div className="grid md:grid-cols-1 gap-12 w-full  items-center">
          <div>
            <h1 ref={titleRef} className="text-6xl font-bold mb-6">
              Travel trip with AI
            </h1>
            <p ref={subtitleRef} className="text-xl text-gray-300 mb-8">
              Revolutionize your digital Travel Apps using Artificial
              Intelligence
            </p>
            {/* Email Signup */}
            <div ref={emailRef} className="flex gap-4 mb-12">
              <Input
                type="email"
                placeholder="Email address"
                className=" border-gray-700 outline-none border-none"
              />
              <Button className="bg-white text-gray-900 hover:bg-gray-100">
                Search
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Hero;
