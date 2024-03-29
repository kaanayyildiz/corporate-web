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
                <button className="bg-black hover:bg-white hover:text-black text-white font-semibold py-2 px-5 transition-all duration-500">
                  View Project
                </button>
              </div>
              <div className="flex flex-col gap-y-1 mt-5">
                <div className="text-xs font-thin text-gray-600">Projects</div>
                <div className="text-xl">Jussieu Est</div>
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
                <button className="bg-black hover:bg-white hover:text-black text-white font-semibold py-2 px-5 transition-all duration-500">
                  View Project
                </button>
              </div>
              <div className="flex flex-col gap-y-1 mt-5">
                <div className="text-xs font-thin text-gray-600">Projects</div>
                <div className="text-xl">The Turk Evi Center</div>
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
                <button className="bg-black hover:bg-white hover:text-black text-white font-semibold py-2 px-5 transition-all duration-500">
                  View Project
                </button>
              </div>
              <div className="flex flex-col gap-y-1 mt-5">
                <div className="text-xs font-thin text-gray-600">Projects</div>
                <div className="text-xl">Expo 2016</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjectCards;
