"use client"
import React from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const AboutGrids: React.FC = () => {
  useEffect(() => {
    const splitTypes = document.querySelectorAll<HTMLElement>(".reveal-type");

    splitTypes.forEach((char, i) => {
      const text = new SplitType(char, { types: "chars,words" });
      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: char,
          start: 'top 80%',
          end: 'top 20%',
          scrub: true,
          markers: false
        },
        opacity: 0.2,
        stagger: 0.1
      })
      // Burada SplitType yerine doğru sınıfı kullanmalısınız.
    });
  }, []);

  return (
    <>
      <div className="scrolltrigger flex  items-center min-h-max mx-auto p-7 md:p-32 border-b">
  <div className="grid grid-cols-1 gap-20 divide-y align-middle md:grid-cols-1 lg:grid-cols-1">
    <div className="max-w-7xl">
      <div id="target">
        <h1 className="font-thin pb-3 text-xl md:text-2xl lg:text-3xl">
          Who We Are
        </h1>
        <p className="text-3xl md:text-5xl lg:text-6xl font-semibold reveal-type">
          With our expertise in the stainless steel sector, we push the
          boundaries and create works of art.
        </p>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default AboutGrids;
