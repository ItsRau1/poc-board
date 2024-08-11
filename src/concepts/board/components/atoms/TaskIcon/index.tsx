import React from "react";
import { Props } from "./types";
import Image from "next/image";

export const TaskIcon: React.FC<Props> = ({ icon }) => {
  return (
    <div className="rounded-lg p-2 bg-white">
      <Image src={`./icons/${icon}.svg`} alt={icon} width={16} height={16} />
    </div>
  );
};
