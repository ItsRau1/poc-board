"use client";
import { BoardSubTitle } from "@/concepts/board/components/atoms/BoardSubTitle";
import { BoardTitle } from "@/concepts/board/components/atoms/BoardTitle";
import { ListTemplate } from "@/ui/templates/ListTemplate";

export default function Page() {
  return (
    <ListTemplate
      title={<BoardTitle />}
      subTitle={<BoardSubTitle />}
      listData={<>teste</>}
    />
  );
}
