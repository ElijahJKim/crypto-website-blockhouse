import React from "react";

import dynamic from "next/dynamic";
import animationData from "../public/dog.json";

const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

export const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };
  return (
    <div>
      <Lottie options={defaultOptions} width={300} height={300} />
    </div>
  );
};
