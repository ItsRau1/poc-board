"use client";
import { BoardSubTitle } from "@/concepts/board/components/atoms/BoardSubTitle";
import { BoardTitle } from "@/concepts/board/components/atoms/BoardTitle";
import { TasksTable } from "@/concepts/board/components/organisms/TasksTable/indext";
import { TaskBoardContextProvider } from "@/concepts/board/contexts/TaskBoardContext";
import { ListTemplate } from "@/ui/templates/ListTemplate";

export default function Page() {
  return (
    <TaskBoardContextProvider>
      <ListTemplate
        title={<BoardTitle />}
        subTitle={<BoardSubTitle />}
        listData={<TasksTable />}
      />
    </TaskBoardContextProvider>
  );
}
