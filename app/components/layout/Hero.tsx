"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";

const Hero = () => {
  useEffect(() => {
    const ourText = new SplitType(".hero-text", { types: "chars" });
    const chars = ourText.chars;
    gsap.fromTo(
      chars,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 2,
        ease: "power4.out",
      }
    );
  });

  return (
    <>
      <div
        className="hero min-h-screen grayscale md:p-24 lg:p-24 justify-start place-items-end"
        style={{
          backgroundImage:
            "url(/assets/images/Garanti-BBVA-Technology-Campus_2.jpg)",
        }}
      >
        <div className="text-left text-neutral-content p-7">
          <div className="text-white hero-text">
            <h1 className="text-4xl md:text-8xl font-bold">Build. Invest.</h1><br />
            <h1 className="mb-5 text-4xl md:text-8xl font-bold">Innovate.</h1><br />
            <button className="bg-white hover:bg-black transition duration-300 hover:text-white w-32 h-10 md:w-48 md:h-14 text-slate-950 text-xs md:text-sm font-semibold uppercase">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
