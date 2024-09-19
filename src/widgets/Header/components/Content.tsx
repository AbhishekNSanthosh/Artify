import { navitems } from "@utils/constants";
import React from "react";

export default function HeaderContent() {
  return (
    <div className="px-[5vw] py-[2rem] w-full items-center justify-between flex flex-row text-white">
      <div className="flex flex-col items-center justify-center">
      <span className="text-4xl text-white title">ARTIFY</span>
      </div>
      <div className="flex items-center justify-center gap-[4vw]">
        {navitems?.map((item) => (
          <span className="" key={item?.title}>{item?.title}</span>
        ))}
      </div>
    </div>
  );
}
