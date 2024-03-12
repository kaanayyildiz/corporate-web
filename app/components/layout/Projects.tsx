"use client";
import React from "react";
import ProjectCards from "./ProjectCards";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);
const Projects: React.FC = () => {
  useEffect(() => {
    const splitTypes = document.querySelectorAll<HTMLElement>(".reveal-type");

    splitTypes.forEach((char, i) => {
      const text = new SplitType(char, { types: "chars,words" });
      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: char,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
          markers: false,
        },
        opacity: 0.2,
        stagger: 0.1,
      });
    });
  }, []);

  return (
    <div className="min-h-screen mx-auto p-7 md:p-32 border-b bg-gray-50">
      <div className="grid grid-cols-1 gap-20 divide-y align-middle md:grid-cols-1 lg:grid-cols-1">
        <div className="max-w-7xl">
          <div id="target">
            <div className="flex items-center">
              <h1 className="font-thin pb-3 text-xl md:text-2xl lg:text-3xl">
                Projects
              </h1>
              <hr className="w-20 h-[0.10rem] ml-3 bg-gray-700 border-0 rounded"></hr>
            </div>
            <p className="text-3xl pb-3 md:text-5xl lg:text-6xl font-semibold reveal-type">
              Big-scale projects carry our signature.
            </p>
          </div>
          <ProjectCards />
        </div>
      </div>
    </div>
  );
};

export default Projects;
