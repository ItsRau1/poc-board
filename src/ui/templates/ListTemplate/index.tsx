import React from "react";
import { Props } from "./types";
import { Title } from "@/ui/components/atoms/Title";
import Image from "next/image";

export const ListTemplate: React.FC<Props> = ({
  title,
  subTitle,
  listData,
}) => {
  return (
    <div className="h-screen flex items-center p-10 flex-col gap-7">
      <div className="flex flex-col items-center gap-3">
        <div>
          <Image src="./icons/logo.svg" alt="logo" width={26} height={22} />
          <Image src="./icons/pencil.svg" alt="pencil" width={18} height={18} />
        </div>
        <Title size="big" value={title} />
        <Title size="sub-title" value={subTitle} />
      </div>
      {listData}
    </div>
  );
};
