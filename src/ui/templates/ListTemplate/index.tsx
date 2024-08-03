import React from "react";
import { Props } from "./types";

export const ListTemplate: React.FC<Props> = ({
  title,
  subTitle,
  listData,
}) => {
  return (
    <div className="h-screen flex items-center p-10 flex-col gap-7">
      <div className="flex flex-col items-center gap-3">
        {title}
        {subTitle}
      </div>
      {listData}
    </div>
  );
};
