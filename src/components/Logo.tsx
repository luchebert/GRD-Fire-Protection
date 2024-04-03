import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <>
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/GRD-logo.png"
        alt="GRD Logo"
        width={241}
        height={89}
        priority
      />
    </>
  );
};

export default Logo;
