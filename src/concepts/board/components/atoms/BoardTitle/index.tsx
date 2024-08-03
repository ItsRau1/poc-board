import { Title } from "@/ui/components/atoms/Title";
import Image from "next/image";
import React from "react";

export const BoardTitle: React.FC = () => {
  return (
    <div className="flex gap-3 justify-start">
      <Image src="./icons/logo.svg" alt="logo" width={26} height={22} />
      <Title value="My Task Board" size="big" />
      <Image
        className="ml-6"
        src="./icons/pencil.svg"
        alt="pencil"
        width={18}
        height={18}
      />
    </div>
  );
};
