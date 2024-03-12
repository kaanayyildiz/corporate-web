import React from "react";

const ProjectCards = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-5">
        <section className="w-fit">
          <div className="h-fit w-full group ">
            <div className="relative overflow-hidden rounded-md drop-shadow-xl hover:saturate-200 transition-all duration-300">
              <figure>
                <img
                  src="/assets/images/JUSSIEU-EST_1.jpg"
                  alt="Jussieu Est Inox Project"
                />
              </figure>
              <div className="absolute h-full w-full flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button className="bg-black hover:bg-white hover:text-black text-white font-semibold py-2 px-5">
                  View Project
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-fit">
          <div className="h-fit w-full group">
            <div className="relative overflow-hidden rounded-md drop-shadow-xl hover:saturate-200 transition-all duration-300">
              <figure>
                <img
                  src="/assets/images/THE-TURKEVI-CENTER_3.jpg"
                  alt="Jussieu Est Inox Project"
                />
              </figure>
              <div className="absolute h-full w-full flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button className="bg-black hover:bg-white hover:text-black text-white font-semibold py-2 px-5">
                  View Project
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-fit">
          <div className="h-fit w-full group">
            <div className="relative overflow-hidden rounded-md drop-shadow-xl hover:saturate-200 transition-all duration-300">
              <figure>
                <img
                  src="/assets/images/EXPO-2016_3.jpg"
                  alt="Jussieu Est Inox Project"
                />
              </figure>
              <div className="absolute h-full w-full flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button className="bg-black hover:bg-white hover:text-black text-white font-semibold py-2 px-5">
                  View Project
                </button>
              </div>
            </div>
          </div>
        </section>
        <div>
          <a href="" className="text-2xl border-animation inline-block font-semibold">View all projects</a>
        </div>
      </div>
    </>
  );
};

export default ProjectCards;
