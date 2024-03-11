import React from "react";
import Image from "next/image";
import InoxLogo from "../../../public/assets/images/inox.png"

const Logo = () => {
  return (
    <>
    <Image className="brightness-200" src={InoxLogo} width={80} height={80} alt="İnox Logo" />
    </>
  );
};

export default Logo;
