import React from "react";
const AboutGrids = () => {
  return (
    <>
      <div className="min-h-max mx-auto p-7 md:p-32 border-b">
        <div className="grid grid-cols-1 gap-20 divide-y align-middle md:grid-cols-1 lg:grid-cols-1">
          <div className="max-w-7xl">
            <div id="target">
              <h1 className="font-thin pb-3 text-2xl md:text-4xl lg:text-5xl">
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
