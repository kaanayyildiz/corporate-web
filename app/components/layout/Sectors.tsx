import React from "react";

const Sectors = () => {
  return (
    <div className="flex flex-col min-h-max mx-auto p-7 md:p-32 border-b">
      <h1 className="font-thin pb-2 text-2xl md:text-4xl lg:text-5xl">
       Our sectors
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  );
};

export default Sectors;
