import HeaderView from "@widgets/Header";
import Image from "next/image";
import React from "react";
import Banner from "./Banner";

export default function LandingPageContent() {
  return (
    <div>
      <div className="w-[100vw] h-[100vh] absolute">
        <Image
          src={"/bg.png"}
          height={1000}
          width={1000}
          alt=""
          className="w-[100vw] h-[100vh] bg-center object-cover"
        />
        {/* Light black overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black-100 opacity-70"></div>
      </div>
      <div className="relative">
        <HeaderView />
        <Banner/>
      </div>
    </div>
  );
}
