"use client";
import { ListTemplate } from "@/ui/templates/ListTemplate";

export default function Page() {
  return (
    <ListTemplate
      title="My Task Board"
      subTitle="Tasks to keep organised"
      listData={<>teste</>}
    />
  );
}
